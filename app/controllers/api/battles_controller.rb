class Api::BattlesController < ApplicationController
    before_action :require_logged_in, only: [:index, :show, :create, :update]
    
    def index
        @battles = Battle.all
        render :index
    end

    def show
        @battle = Battle.includes(:tasks, :posts).find_by(id: params[:id])
    end

    def create
        @battle = Battle.new(battle_params)

        if @battle.save
            render :show
        else
            render json: @battle.errors.full_messages, status: 422
        end
    end

    def update
        @battle = Battle.find_by(id: params[:id])

        if @battle && @battle.update(battle_params)
            render :show
        else
            render json: @battle.errors.full_messages, status: 422
        end
    end

    private

    def battle_params
        params[:battle][:participant_ids] = [] if params[:battle][:participant_ids] == nil
        params.require(:battle).permit(:id, :name, :mode, :score_board, participant_ids: [])
    end
end
