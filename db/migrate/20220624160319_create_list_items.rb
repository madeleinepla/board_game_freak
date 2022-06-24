class CreateListItems < ActiveRecord::Migration[5.2]
  def change
    create_table :list_items do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :list_id, null: false
      t.integer :game_id, null: false

      t.timestamps
    end
    
    add_index :list_items, :list_id
    add_index :list_items, :game_id
  end
end
