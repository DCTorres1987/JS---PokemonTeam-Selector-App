Rails.application.routes.draw do
  resources :teams, only: [:index, :create]
  resources :pokemons, only: [:index, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
