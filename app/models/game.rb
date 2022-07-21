class Game < ApplicationRecord
  validates :title, :tagline, :description, :year, :designer, :artist, 
    :publisher, :min_players, :max_players, :min_playtime, :max_playtime,
    :age, presence: true

  has_many :classifications,
    primary_key: :id, 
    foreign_key: :game_id,
    class_name: :Classification

  has_many :ratings,
    primary_key: :id, 
    foreign_key: :game_id,
    class_name: :Rating

  has_many :list_items,
    primary_key: :id,
    foreign_key: :game_id,
    class_name: :ListItem
end
