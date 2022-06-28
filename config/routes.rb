Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users 

    resource :session, only: [:create, :destroy]

    resources :games, only: [:show, :index]

    resources :lists, only: [:create, :update, :show, :index, :destroy] do
      resources :list_items
    end

    resources :list_likes, only: [:create, :destroy]

  end

  root to: 'static_pages#root'
end