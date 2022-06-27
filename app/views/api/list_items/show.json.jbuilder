# json.extract! @list_item, :id, :list_id, :title, :body, :game_id

json.(@list_item, :id, :list_id, :title, :body, :game_id)
json.game @list_item.game