class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :description, :menu, :image_url

  has_many :users
  has_many :reservations
end

