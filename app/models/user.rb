class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true, presence: true
    validates :password, length: { minimum: 5 }
    validates :password_confirmation, presence: true

    has_many :reservations
    has_many :restaurants, through: :reservations
end
