class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :description, :menu, :image_url
end

