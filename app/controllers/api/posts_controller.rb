class Api::PostsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :delete]

    def create
        @post = Post.new(post_params)

        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])

        if @post && (@post.user_id.to_s == current_user.id.to_s) && @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])

        if @post && (@post.user_id.to_s == current_user.id.to_s) && @post.destroy
            render json: ["You deleted your post"]
        else
            render json: ["You cannot delete someone else's post"]
        end
    end

    private

    def post_params
        params.require(:post).permit(:id, :body, :battle_id, :user_id)
    end
end
