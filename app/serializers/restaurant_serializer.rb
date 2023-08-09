class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :description, :image_url
end
