class Api::ListItemLikesController < ApplicationController
  def create
    @list_item_like = ListItemLike.new
    @list_item_like.user_id = current_user.id
    @list_item_like.list_item_id = params[:listItemId]
    if @list_item_like.save
      @list_item = @list_item_like.list_item
      @list = @list_item.list
      render 'api/lists/show'
    else
      render json: @list_item_like.errors.full_messages, status: 401
    end
  end

  def destroy
    # debugger
    @list_item_like = ListItemLike.find_by(user_id: current_user.id, list_item_id: params[:listItemId])
    @list_item_like.destroy
    @list_item = @list_item_like.list_item
    @list = @list_item.list
    render 'api/lists/show'
  end
end
