class Api::V1::CommentsController < ApplicationController

  def index
    @comments = Comment.all.sample(20)
    @posts = @comments.map {|comment| comment.post}.flatten
    @users = @comments.map {|comment| comment.user.slice(:username, :id, :created_at, :name, :img_url, :sm_img_url, :latitude, :longitude, :posts, :comments)}.flatten

    render json: {users: @users, posts: @posts, comments: @comments}, status: 200
  end


end
