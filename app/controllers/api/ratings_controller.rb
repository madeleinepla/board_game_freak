class Api::RatingsController < ApplicationController
  def create
    @rating = Rating.new
    @rating.user_id = params[:rating][:userId]
    @rating.game_id = params[:rating][:gameId]
    @rating.score = params[:rating][:score]
    
    if @rating.save
      @game = Game.find(params[:rating][:gameId])
      render 'api/games/show'

      # render json: ['success']
    else

      render json: ['something went wrong']
    end
  end

  def update
    @rating = Rating.find_by(user_id: current_user.id, game_id: params[:rating][:gameId])
    
    if @rating && @rating.update(:score => params[:rating][:score])
      @game = @rating.game
      render 'api/games/show'
    elsif !@rating
      render json: ['Could not locate comment'], status: 400
    else
      render json: ["Error - something went wrong"], status: 401
    end
  end

  def destroy
    @rating = Rating.find(params[:id])
    @rating.destroy
    @game = @rating.game
    render 'api/games/show'
  end
end
