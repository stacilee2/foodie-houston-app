class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :party_size, :restaurant_id

  belongs_to :restaurant
end

