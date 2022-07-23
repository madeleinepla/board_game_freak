# json.partial! 'api/users/user', user: @user
json.extract! @user, :username, :id, :ratings, :rated_games, :lists, :list_likes, :list_comments

# json.set! @user.id do 
#   json.id @user.id
#   json.username @user.username
#   json.ratings @user.ratings
#   json.lists @user.lists
#   json.likes @user.list_likes
#   json.comments @user.list_comments
# end