class GamesAddImgColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :header_img, :string
  end
end
