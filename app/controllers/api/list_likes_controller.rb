class Api::ListLikesController < ApplicationController
  def create
    @list_like = ListLike.new
    @list_like.user_id = current_user.id
    @list_like.list_id = params[:listId]
    
    if @list_like.save
      @list = @list_like.list
      render 'api/lists/show'

      # render json: ['success']
    else

      render json: ['something went wrong']
    end
  end

  def destroy
    @list_like = ListLike.find_by(user_id: current_user.id, list_id: params[:listId])
    @list_like.destroy
    @list = @list_like.list
    render 'api/lists/show'
  end
end
