class Api::ListItemsController < ApplicationController
  def create
    @list_item = ListItem.new(list_item_params)
    
    if @list_item.save
      render :show
    else
      render @list_item.errors.full_messages, status: 401
    end
  end
  
  def update
    @list_item = ListItem.find(params[:id])
    if @list_item && @list_item.update_attributes(list_item_params)
      render :show
    elsif !@list_item
      render json: ['Could not locate list item'], status: 400
    else
      render json: @list_item.errors.full_messages, status: 401
    end
  end
  
  def show
    @list_item = ListItem.find(params[:id])
    render :show
  end
  
  def destroy
    @list_item = ListItem.find(params[:id])
    if @list_item
      @list_item.destroy
      render :show
    else
      render ['Could not find list item']
    end
  end
  
  private
  
  def list_item_params
    debugger
    params.require(:listItem).permit(:title, :body, :list_id, :game_id)
  end
end
