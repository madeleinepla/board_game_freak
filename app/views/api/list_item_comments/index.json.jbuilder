@list_item_comments.each do |list_item_comment|
  json.set! list_item_comment.id do 
    json.id list_item_comment.id
    json.user_id list_item_comment.list_id
    json.list_item_id list_item_comment.list_item_id
    json.created_at list_item_comment.created_at
    json.body list_item_comment.body
    json.user list_item_comment.user
  end
end