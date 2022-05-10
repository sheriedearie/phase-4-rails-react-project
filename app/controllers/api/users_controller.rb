class Api::UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end
  
  def index
    users = User.walkers
    render json: users,  status: 200
  end
  def index
    users = User.owners
    render json: users,  status: 200
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :image_url, :bio, :email, :role)
  end

end
