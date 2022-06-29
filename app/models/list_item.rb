class ListItem < ApplicationRecord
  validates :title, :body, :list_id, :game_id, presence: true
  
  belongs_to :list,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :List

  belongs_to :game,
    primary_key: :id,
    foreign_key: :game_id,
    class_name: :Game

  has_many :list_item_likes, dependent: :destroy,
    primary_key: :id,
    foreign_key: :list_item_id,
    class_name: :ListItemLike
end
