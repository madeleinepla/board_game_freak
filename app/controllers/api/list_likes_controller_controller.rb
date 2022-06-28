class Api::ListLikesControllerController < ApplicationController
  def create
    @list_like = ListLike.new
    @list_like.user_id = current_user.id
    @list_like.list_id = params[:id]
    if @list_like.save
      @list = @list_like.list
      render 'api/lists/show'
    else
      render json: @list_like.errors.full_messages, status: 401
    end
  end

  def destroy
    @list_like = ListLike.find_by(user_id: current_user.id, list_id: params[:id])
    @list_like.destroy
    @list = @list_like.list
    render 'api/lists/show'
  end
end
