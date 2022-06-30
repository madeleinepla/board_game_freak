class FixCommentIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :list_comments, column: [:user_id, :list_id]
  end
end
