class RestaurantsController < ApplicationController
    def index
        restaurants = Restaurant.all
        render json: restaurants
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
