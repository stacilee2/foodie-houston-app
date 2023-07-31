class UsersController < ApplicationController
  before_action :authorize
  #signup
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

    #get /me
  def show
    render json: current_user
  end

  private

  def authorize
    current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"]}, status: :unauthorized unless current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
  
  def user_params
    params.permit(:name, :username, :password, :password_confirmation)
  end
    
end
