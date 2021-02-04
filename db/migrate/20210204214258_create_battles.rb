class CreateBattles < ActiveRecord::Migration[5.2]
  def change
    create_table :battles do |t|
      t.string :name, null: false
      t.integer :participant_ids, array: true, default:[]
      t.timestamps
    end
  end
end
