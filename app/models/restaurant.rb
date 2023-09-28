class Restaurant < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :cuisine, presence: true
    validates :description, presence: true, length: { maximum: 60 }
    validates :image_url, presence: true, format: { with: /https/}
    validates :menu, presence: true, format: { with: /https/}

    has_many :reservations
    has_many :users, through: :reservations
end
