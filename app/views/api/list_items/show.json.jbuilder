# json.extract! @list_item, :id, :list_id, :title, :body, :game_id

json.(@list_item, :id, :list_id, :title, :body, :game_id)
json.game @list_item.game
json.likes list_item.list_item_likes.count
if current_user
  json.liked_by_current_user !!list_item.list_item_likes.find_by(user_id: current_user.id)
end