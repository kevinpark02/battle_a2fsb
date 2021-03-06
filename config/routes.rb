Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create]
    resources :battles, only: [:index, :show, :create, :update]
    resources :tasks, only: [:create, :update, :delete]
    resources :posts, only: [:create, :update, :delete]
    resource :session, only: [:create, :destroy]
  end
end
