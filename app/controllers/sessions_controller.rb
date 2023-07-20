class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    #login
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: {login: "Invalid username or password"}}, status: :unauthorized
        end
    end

    #logout
    def destroy
        session.delete :user_id
        head :no_content
    end
    
    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
