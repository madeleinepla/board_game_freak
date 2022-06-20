class Api::GamesController < ApplicationController
  def show
    @game = Game.find(params[:id])
    if @game
      render :show
    else
      render status: 404
    end
  end

  def index
    @games = Game.all
    render :index
  end
end
