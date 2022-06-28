@lists.each do |list|
  json.set! list.id do 
    json.id list.id
    json.author_id list.author_id
    json.title list.title
    json.body list.body
    json.created_at list.created_at
    json.author list.author
    
    json.list_items list.list_items.each do |list_item|
      json.id list_item.id
      json.game list_item.game
    end
  end
  
end

