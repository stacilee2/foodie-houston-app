class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true, presence: true
    validates :password, presence: true, length: { minimum: 5 }
    validates :password_confirmation, presence: true

    has_many :reservations
end
