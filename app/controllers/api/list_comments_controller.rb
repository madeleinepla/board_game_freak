class Api::ListCommentsController < ApplicationController
  def create
    @list_comment = ListComment.new(comment_params)
    if @list_comment.save
      render json: ["Success"]
    else
      render json: ["Error - something went wrong"], status: 401
    end
  end

  def show
    @list_comment = ListComment.find(params[:id])
    render :show
  end
  
  def index
    @list_comments = ListComment.all
    render :index
  end

  def destroy
    @list_comment = ListComment.find(params[:id])
    @list_comment.destroy
    @list = @list_comment.list
    render 'api/lists/show'
  end

  def comment_params
    params.require(:comment).permit(:body, :user_id, :list_id)
  end
end
