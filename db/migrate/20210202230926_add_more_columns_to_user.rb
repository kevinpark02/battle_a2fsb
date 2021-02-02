class AddMoreColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :gender, :string, null: false
    add_column :users, :team, :string
  end
end
