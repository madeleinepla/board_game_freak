class CreateListsAgain < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title
      t.text :body
      t.integer :author_id

      t.timestamps
    end

    add_index :lists, :author_id
  end
end
