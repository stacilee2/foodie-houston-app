class AddMenuToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :menu, :string
  end
end
