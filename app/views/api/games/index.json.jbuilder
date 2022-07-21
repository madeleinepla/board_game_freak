# json.array! @games do |game|
#   json.title game.title
#   json.tagline game.tagline
# end

@games.each do |game|
  json.set! game.id do 
    json.id game.id
    json.title game.title
    json.year game.year
    json.tagline game.tagline
    json.header_img game.header_img
    json.classifications game.classifications
    json.ratings game.ratings

    if current_user
      json.user_rating game.ratings.find_by(user_id: current_user.id)
    end
  end

  # json.(game, :id, :title, :tagline, :description, :year, :designer, :artist, 
  # :publisher, :min_players, :max_players, :min_playtime, :max_playtime, :age, :header_img, :bg_img)
  
end