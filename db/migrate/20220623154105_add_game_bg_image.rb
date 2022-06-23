class AddGameBgImage < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :bg_img, :string
  end
end
