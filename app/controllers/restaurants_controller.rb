class RestaurantsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        restaurants = Restaurant.all
        if restaurants
            render json: restaurants
        else
            render json: { error: "Restaurants not found" }
        end
    end

    def show
        restaurant = current_user.restaurant.find_by(id: params[:id])
        render json: restaurant
    end

    private
    def current_user
        current_user = User.find_by(id: session[:user_id])
    end
end
