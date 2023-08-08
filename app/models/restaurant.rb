class Restaurant < ApplicationRecord
    has_many :reservations

    validates :name, presence: true
    validates :cuisine, presence: true
    validates :description, presence: true
    validates :image_url, presence: true
end
