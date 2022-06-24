class Classification < ApplicationRecord
  belongs_to :game,
    primary_key: :id, 
    foreign_key: :game_id,
    class_name: :Game
end
