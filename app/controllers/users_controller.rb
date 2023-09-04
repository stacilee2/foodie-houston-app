class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
skip_before_action :authorize, only: [:create]
  #signup
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  #get /me
  def show
    render json: @current_user
  end
  
  private

  def render_unprocessable_entity_response(invalid)
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
  
  def user_params
    params.permit(:name, :username, :password, :password_confirmation)
  end
    
end
