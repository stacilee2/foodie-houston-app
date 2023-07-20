class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.date :date
      t.time :time
      t.integer :user_id
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
