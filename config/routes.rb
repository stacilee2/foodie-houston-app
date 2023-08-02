Rails.application.routes.draw do
  resources :restaurants, only: [:index, :show]

  resources :users, only: [:create, :show] do
    resources :reservations
  end

  get "/reservations", to: "reservations#index"
  delete "/reservations/:reservation_id", to: "reservations#destroy"
  patch "reservations/:reservation_id", to: "reservations#update"
  post "/restaurants/:restaurant_id/reservations", to: "reservations#create"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
