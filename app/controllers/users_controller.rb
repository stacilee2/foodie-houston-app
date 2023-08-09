class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
 
  #signup
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

    #get /me
  def show
    current_user = User.find_by(id: session[:user_id])
    if current_user
      render json: current_user
    else 
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  private

  def render_unprocessable_entity_response(invalid)
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
  
  def user_params
    params.permit(:name, :username, :password, :password_confirmation)
  end
    
end
