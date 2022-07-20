class ChangeRatingToScore < ActiveRecord::Migration[5.2]
  def change
    remove_column :ratings, :rating

    add_column :ratings, :score, :integer, null: false
  end
end
