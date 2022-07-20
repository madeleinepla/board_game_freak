class Rating < ApplicationRecord
  belongs_to :game,
    primary_key: :id, 
    foreign_key: :game_id,
    class_name: :Game

  belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: :User
end
