# json.set! @list.id do 
#   json.id @list.id
#   json.author_id @list.author_id
#   json.title @list.title
#   json.body @list.body
#   json.created_at @list.created_at
#   json.author @list.author
# end

# json.extract! @list, :id, :author_id, :title, :body, :created_at, :updated_at

json.partial! 'api/lists/list', list: @list