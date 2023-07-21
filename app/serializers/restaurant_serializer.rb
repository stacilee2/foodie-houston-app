class RestaurantSerializer < ActiveModel::Serializer
  attributes :name, :cuisine, :description, :image_url
end
