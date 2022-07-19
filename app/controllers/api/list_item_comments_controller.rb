class ListItemCommentsController < ApplicationController
  def create
    @list_item_comment = ListItemComment.new(lite_item_comment_params)
    if @list_item_comment.save
      render json: ["Success"]
    else
      render json: ["Error - something went wrong"], status: 401
    end
  end

  def show
    @list_item_comment = ListItemComment.find(params[:id])
    render :show
  end
  
  def index
    @list_item_comments = ListItemComment.all
    render :index
  end

  def destroy
    @list_item_comment = ListItemComment.find(params[:id])
    @list_item_comment.destroy
    @list_item = @list_item_comment.list_item
    render 'api/lists/show'
  end

  def list_item_comment_params
    params.require(:list_item_comment).permit(:body, :user_id, :list_id)
  end
end
