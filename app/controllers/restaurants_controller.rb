class RestaurantsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]

    def index
        restaurants = Restaurant.all
        if restaurants
            render json: restaurants
        else
            render json: { error: "Restaurants not found" }
        end
    end

    def show
        restaurant = @current_user.restaurants.find_by(id: params[:id])
        render json: restaurant
    end

    def create
        restaurant = Restaurant.create(restaurant_params)
        if restaurant.valid?
            render json: restaurant, status: :created
        else
            render json: { errors: restaurant.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        restaurant = @current_user.restaurants.find_by(id: params[:restaurant_id])
        restaurant.destroy
        render json: restaurant
    end
    
    private

    def restaurant_params
        params.permit(:name, :cuisine, :description, :image_url, :menu)
    end
end
