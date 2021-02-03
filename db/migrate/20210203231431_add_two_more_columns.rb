class AddTwoMoreColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :class_of, :string, null: false
    add_column :users, :points, :integer
  end
end
