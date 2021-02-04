class Api::UsersController < ApplicationController

    before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]

    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :username, :gender, :team, :class_of, :points, :password)
    end
end
