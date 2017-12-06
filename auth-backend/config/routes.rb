Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      resources :comments
      resources :posts
      post "/login", to: "auth#create"
      post "/signup", to: "users#create"
      get "/current-user", to: "auth#show"
    end
  end
end
