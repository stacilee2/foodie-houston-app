class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.string :date
      t.string :time
      t.integer :party_size
      t.integer :user_id
      t.integer :restaurant_id
      t.timestamps
    end
  end
end
