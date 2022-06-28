class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      # render @list.errors.full_messages, status: 401
      render json: ["Error - Missing title and/or description"], status: 401
    end
  end
  
  def update
    @list = List.find(params[:id])
    if @list && @list.update_attributes(list_params)
      render :show
    elsif !@list
      render json: ['Could not locate list'], status: 400
    else
      render json: @list.errors.full_messages, status: 401
    end
  end
  
  def show
    @list = List.find(params[:id])
    render :show
  end
  
  def index
    @lists = List.all
    render :index
  end
  
  def destroy
    @list = List.find(params[:id])
    if @list
      @list.destroy
      render :show
    else
      render ['Could not find list']
    end
  end
  
  private
  
  def list_params
    params.require(:list).permit(:title, :body, :author_id)
  end
end
