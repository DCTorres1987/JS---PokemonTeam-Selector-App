class PokemonsController < ApplicationController

    def index 
        render :json => Pokemon.all, :include => :category
    end    
end
