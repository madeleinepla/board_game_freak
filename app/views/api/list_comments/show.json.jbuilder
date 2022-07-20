json.set! @list_comment.id do 
    json.id @list_comment.id
    json.user_id @list_comment.list_id
    json.list_id @list_comment.list_id
    json.created_at @list_comment.created_at
    json.body @list_comment.body
    json.user @list_comment.user
  end