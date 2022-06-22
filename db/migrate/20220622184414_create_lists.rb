class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title
      t.text :body
      t.integer :author_id
    end

    add_index :lists, :author_id
  end
end
