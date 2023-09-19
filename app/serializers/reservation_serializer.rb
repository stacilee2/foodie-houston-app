class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :party_size, :restaurant_id, :user_id, :restaurant, :username

  def username
    object.user.username
  end

  def restaurant_name
    object.restaurant
  end
end

