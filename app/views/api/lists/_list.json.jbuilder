json.(@list, :id, :title, :author_id, :title, :body, :created_at, :updated_at)
json.author @list.author
json.likes @list.list_likes.count
if current_user
  json.liked_by_current_user !!@list.list_likes.find_by(user_id: current_user.id)
end
# json.list_items @list.list_items
json.list_items @list.list_items.each do |list_item|
  json.id list_item.id
  json.list_id list_item.list_id
  json.title list_item.title
  json.body list_item.body
  json.game_id list_item.game_id
  json.game list_item.game
  json.likes list_item.list_item_likes.count
  if current_user
    json.liked_by_current_user !!list_item.list_item_likes.find_by(user_id: current_user.id)
  end
end