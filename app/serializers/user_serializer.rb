class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name

  has_many :reservations
  has_many :restaurants
end
