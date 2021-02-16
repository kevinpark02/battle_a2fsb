class AddModeToBattle < ActiveRecord::Migration[5.2]
  def change
    add_column :battles, :mode, :string, null: false
  end
end
