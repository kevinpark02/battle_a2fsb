class AddScoreBoardToBattle < ActiveRecord::Migration[5.2]
  def change
    add_column :battles, :score_board, :text
  end
end
