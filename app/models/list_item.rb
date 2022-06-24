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
end
