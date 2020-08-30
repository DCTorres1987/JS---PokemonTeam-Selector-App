class PokemonsController < ApplicationController

    def index 
        render :json => Pokemon.all, :include => :team
    end    
end
