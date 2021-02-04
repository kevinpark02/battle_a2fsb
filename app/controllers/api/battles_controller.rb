class Api::BattlesController < ApplicationController
    def index
        @battles = Battle.all
    end

    def show
        @battle = Battle.find_by(id: params[:id])
    end

    def create
        @battle = Battle.new(battle_params)
    end

    def update
        @battle = Battle.find_by(id: params[:id])

        if @battle && @battle.update(battle_params)
            render :show
        else
            render json: @battle.errors.full_messages, status: 422
        end
    end
end
