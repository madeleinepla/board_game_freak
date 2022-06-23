class FinalRemoveType < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :type
  end
end
