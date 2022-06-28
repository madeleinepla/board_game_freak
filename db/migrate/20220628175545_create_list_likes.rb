class CreateListLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :list_likes do |t|
      t.integer :user_id, null: false
      t.integer :list_id, null: false
      t.timestamps
    end
    add_index :list_likes, :user_id
    add_index :list_likes, :list_id
    add_index :list_likes, [:user_id, :list_id], unique: true
  end
end
