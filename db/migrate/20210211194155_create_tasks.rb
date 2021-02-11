class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.integer :points, null: false
      t.integer :battle_id, null: false
      t.timestamps
    end
    add_index :tasks, :battle_id
  end
end
