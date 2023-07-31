class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :description, :image_url

  has_many :reservations
end
