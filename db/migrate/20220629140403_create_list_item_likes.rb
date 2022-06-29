class CreateListItemLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :list_item_likes do |t|
      t.integer :user_id
      t.integer :list_item_id

      t.timestamps
    end
    add_index :list_item_likes, :user_id
    add_index :list_item_likes, :list_item_id
    add_index :list_item_likes, [:user_id, :list_item_id], unique: true
  end
end
