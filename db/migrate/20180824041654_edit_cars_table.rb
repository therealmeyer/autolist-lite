class EditCarsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :cars, :views, :integer
    add_column :cars, :views, :integer, null: false, default: 1
  end
end
