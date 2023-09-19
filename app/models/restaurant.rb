class Restaurant < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :cuisine, presence: true
    validates :description, presence: true, length: { maximum: 60 }
    validates :image_url, presence: true
    validates :menu, presence: true

    has_many :reservations
    has_many :users, through: :reservations
end
