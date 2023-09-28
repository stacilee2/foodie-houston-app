Rails.application.routes.draw do
  # Restaurants routes
  resources :restaurants, only: [:index, :show]
  post "/restaurants", to: "restaurants#create"

  #Reservations routes
  get "/reservations", to: "reservations#index"
  delete "/reservations/:reservation_id", to: "reservations#destroy"
  patch "reservations/:reservation_id", to: "reservations#update"
  post "/restaurants/:restaurant_id/reservations", to: "reservations#create"

  # Users and sessions routes
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
