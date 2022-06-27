json.(@list, :id, :title, :author_id, :title, :body, :created_at, :updated_at)
json.author @list.author
# json.list_items @list.list_items
json.list_items @list.list_items.each do |list_item|
  json.id list_item.id
  json.list_id list_item.list_id
  json.title list_item.title
  json.body list_item.body
  json.game_id list_item.game_id
  json.game list_item.game
end