# json.array! @games do |game|
#   json.title game.title
#   json.tagline game.tagline
# end

@games.each do |game|
  json.set! game.id do 
    json.id game.id
    json.title game.title
    json.tagline game.tagline
  end
end