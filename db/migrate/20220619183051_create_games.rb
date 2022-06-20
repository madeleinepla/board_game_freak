class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :tagline, null: false
      t.text :description, null: false
      t.integer :year, null: false
      t.string :designer, null: false
      t.string :artist, null: false
      t.string :publisher, null: false
      t.integer :min_players, null: false
      t.integer :max_players, null: false
      t.integer :min_playtime, null: false
      t.integer :max_playtime, null: false
      t.integer :age, null: false

      t.timestamps
    end
  end
end
