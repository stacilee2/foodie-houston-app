class AddColumnToReservations < ActiveRecord::Migration[6.1]
  def change
    add_column :reservations, :party_size, :integer
  end
end
