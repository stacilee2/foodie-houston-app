require 'json'
class ReservationsController < ApplicationController

    def index
        reservations = current_user.reservations
        render json: reservations
    end

    def show
        reservation = current_user.reservations.find_by(id: params[:id])
        if reservation
            render json: reservation
        else
            render json: { error: "Not Found" }, status: :unauthorized
        end
    end

    def create
        reservation = Reservation.create(reservation_params)
        render json: reservation
    end

    private

    def current_user
        current_user = User.find_by(id: session[:user_id])
    end

    def reservation_params
        params.permit(:date, :time, :party_size, :restaurant_id)
            .merge({user_id: session[:user_id]})
    end
end
