class ReservationsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def index
        reservations = current_user.reservations
        render json: reservations
    end

    def show
        reservation = current_user.reservations.find_by(id: params[:id])
        render json: reservation
    end

    def create
        reservation = current_user.reservations.create(reservation_params)
        render json: reservation
    end

    def destroy
        reservation = Reservation.find_by(id: params[:reservation_id])
        reservation.destroy
        render json: reservation
    end

    def update
        reservation = Reservation.find_by(id: params[:reservation_id])
        reservation.update(reservation_params)
        render json: reservation
    end

    private

    def current_user
        current_user = User.find_by(id: session[:user_id])
    end

    def reservation_params
        params.permit(:date, :time, :party_size, :restaurant_id)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
