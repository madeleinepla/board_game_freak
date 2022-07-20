# json.extract! @game, :id, :title, :tagline, :description, :year, :designer, :artist, 
#   :publisher, :min_players, :max_players, :min_playtime, :max_playtime, :age, :header_img, :bg_img

json.(@game, :id, :title, :tagline, :description, :year, :designer, :artist, 
  :publisher, :min_players, :max_players, :min_playtime, :max_playtime, :age, :header_img, :bg_img)
json.classifications @game.classifications
json.ratings @game.ratings
if current_user
  json.user_rating @game.ratings.find_by(user_id: current_user.id)
end