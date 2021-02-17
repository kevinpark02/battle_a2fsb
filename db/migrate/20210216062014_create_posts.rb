class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :battle_id
      t.integer :user_id 
      t.timestamps
    end
    add_index :posts, :battle_id
    add_index :posts, :user_id
  end
end
