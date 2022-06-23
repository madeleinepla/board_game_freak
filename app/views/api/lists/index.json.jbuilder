@lists.each do |list|
  json.set! list.id do 
    json.id list.id
    json.title list.title
    json.body list.body
    json.created_at list.created_at
  end
end