class Game < ApplicationRecord
  validates :title, :tagline, :description, :year, :designer, :artist, 
    :publisher, :min_players, :max_players, :min_playtime, :max_playtime,
    :age, presence: true
  
  def show
    @game = Game.find(params[:id])
    if @game
      render :show
    else
      render json: @game.errors.full_messages, status: 404
    end
  end

  def index
    @games = Game.all
    render :index
  end
end
