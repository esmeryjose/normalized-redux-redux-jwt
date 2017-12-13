class Api::V1::PostsController < ApplicationController

  def index
    @posts = Post.all.sample(20)
    # @users = @posts.map{|post| post.user.slice(:username, :id, :created_at, :name, :img_url, :sm_img_url, :latitude, :longitude, :posts, :comments)}.flatten#.map{|user| {username: user.username, id: user.id, created_at: user.created_at}}
    # @comments = @posts.map{|post| post.comments}.flatten
    # # @users = @users.map {|user| {username: user.username, id: user.id, created_at: user.created_at}}
    render json: @posts, include: [:user, :comments]#{users: @users, posts: @posts, comments: @comments}, status: 200
  end

  def show
    @post = Post.find_by(id: params[:post_id])
    @users = [@post.user.slice(:username, :id, :created_at, :name, :img_url, :sm_img_url, :latitude, :longitude, :posts, :comments)]
    @comments = @post.comments
    render json: {users: @users, posts: @posts, comments: @comments}, status: 200
  end

  def create
    byebug
    @post = Post.new(post_params)
  end

  private

  def post_params
    params.require("post")
  end
end
