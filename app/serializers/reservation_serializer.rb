class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :party_size, :restaurant_id
  has_one :user
  belongs_to :restaurant
end
