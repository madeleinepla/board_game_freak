class CreateClassifications < ActiveRecord::Migration[5.2]
  def change
    create_table :classifications do |t|
      t.integer :game_id
      t.string :main_class
      t.string :sub_class

      t.timestamps
    end
    add_index :classifications, :game_id
  end
end
