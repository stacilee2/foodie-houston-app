class Restaurant < ApplicationRecord
    validates :name, presence: true
    validates :cuisine, presence: true
    validates :description, presence: true
    validates :image_url, presence: true

    # has_many :users, through: :reservations
    has_many :reservations
end
