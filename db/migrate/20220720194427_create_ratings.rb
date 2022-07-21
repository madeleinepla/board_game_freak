class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :game_id, null: false
      t.integer :user_id, null: false
      t.integer :rating, null: false

      t.timestamps
    end
    add_index :ratings, :user_id
    add_index :ratings, :game_id
    add_index :ratings, [:user_id, :game_id], unique: true
  end
end
