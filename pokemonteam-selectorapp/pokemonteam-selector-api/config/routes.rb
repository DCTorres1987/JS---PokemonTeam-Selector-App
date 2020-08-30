Rails.application.routes.draw do
  resources :teams, only: :index
  resources :pokemons, only: :index
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
