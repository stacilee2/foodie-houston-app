class Reservation < ApplicationRecord
    validates :date, presence: true
    validates :time, presence: true
    validates :party_size, presence: true, length: { in: 1...10 }
    
    #Joins TABLE
    belongs_to :restaurant
    belongs_to :user
end
