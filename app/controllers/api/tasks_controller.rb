class Api::TasksController < ApplicationController
    before_action :require_logged_in, only: [:index, :show, :create, :update]

    def create
        @task = Task.new(task_params)

        if @task.save
            render :show
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    def update
        @task = Task.find_by(id: params[:id])

        if @task && @task.update(task_params)
            render :show
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    def destroy
        @task = Task.find_by(id: params[:id])
        
        if @task && @task.destroy
            render json: ["You have deleted a task"]
        end
    end

    private
    
    def task_params
        params.require(:task).permit(:id, :name, :points)
    end
end
