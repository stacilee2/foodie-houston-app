class Reservation < ApplicationRecord
    validates :date, presence: true
    validates :time, presence: true
    validates :party_size, presence: true, length: { in: 1...10 }
    
    belongs_to :restaurant
    belongs_to :user

    def restaurant_name
        restaurant.name
    end
end
