class ReservationsController < ApplicationController

    def index
        reservations = @current_user.reservations
        render json: reservations
    end

    def show
        reservation = @current_user.reservations.find_by(id: params[:id])
        render json: reservation
    end

    def create
        reservation = @current_user.reservations.create!(reservation_params)
        if reservation.valid?
            render json: reservation
        else
            render json: { errors: reservation.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        reservation = @current_user.reservations.find_by(id: params[:reservation_id])
        reservation.destroy
        render json: reservation
    end

    def update
        reservation = @current_user.reservations.find_by(id: params[:reservation_id])
        reservation.update(reservation_params)
        render json: reservation
    end

    private

    def reservation_params
        params.permit(:date, :time, :party_size, :restaurant_id)
    end

end
