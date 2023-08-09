class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unauthorized_response
   
    #login
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Unauthorized"}, status: :unauthorized
        end
    end

    #logout
    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def render_unauthorized_response(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unauthorized
    end
    
end
