class CreateListItemComments < ActiveRecord::Migration[5.2]
  def change
    create_table :list_item_comments do |t|
      t.integer :user_id, null: false
      t.integer :list_item_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :list_item_comments, :user_id
    add_index :list_item_comments, :list_item_id
  end
end
