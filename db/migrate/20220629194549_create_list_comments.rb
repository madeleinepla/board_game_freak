class CreateListComments < ActiveRecord::Migration[5.2]
  def change
    create_table :list_comments do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :list_id, null: false

      t.timestamps
    end
    add_index :list_comments, :user_id
    add_index :list_comments, :list_id
    add_index :list_comments, [:user_id, :list_id], unique: true
  end
end
