class Api::V1::AuthController < ApplicationController
  # skip_before_action :authorized, only: [:create, :show]

  def create
    @user = User.find_by(username: user_login_params[:username])
    if @user && @user.authenticate(user_login_params[:password])
      token = encode_token({ user_id: @user.id })
      @posts = @user.posts
      @comments = @user.comments
      @users = [@user.slice(:username, :id, :created_at, :name, :img_url, :sm_img_url, :latitude, :longitude, :posts, :comments)]
      render json: { username: @user.username, user_id: @user.id, users: @users, posts: @posts, comments: @comments, jwt: token }, status: 202
    else
      render json: { message: "Invalid username or password" }, status: 401
    end
  end

  def show
    if !!current_user #current_user comes from application controller; it finds current user by id found in decoded JWT token
      @user = current_user
      token = encode_token({ user_id: @user.id })
      @posts = @user.posts
      @comments = @user.comments
      @users = [@user.slice(:username, :id, :created_at, :name, :img_url, :sm_img_url, :latitude, :longitude, :posts, :comments)]
      render json: { username: @user.username, user_id: @user.id, users: @users, posts: @posts, comments: @comments, jwt: token }, status: 202
    else
      render json: { message: "User not found" }, status: 404
    end
  end

  private

  def user_login_params
    params.require(:auth).permit(:username, :password)
  end

end
