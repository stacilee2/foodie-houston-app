class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :restaurants

  has_many :reservations
  has_many :restaurants

  def restaurants
    object.restaurants.uniq
  end
end
