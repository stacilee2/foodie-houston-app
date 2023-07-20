class Restaurant < ApplicationRecord
    has_many :users, through: :reservations
end
