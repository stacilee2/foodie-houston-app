class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :description, :image_url

  has_many :users, through: :reservations
end
