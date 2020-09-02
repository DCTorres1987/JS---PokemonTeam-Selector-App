class PokemonsController < ApplicationController

    def index 
        render :json => Pokemon.all, :include => :team
    end    

    def create
        team = Team.find_by(id: params[:team][:id]);
        pokemon = Pokemon.create(name: params[:name], image: params[:image], poke_type: params[:poke_type], team: team);
        render :json => pokemon
    end

    def destroy
        Pokemon.find(params[:id]).destroy
        render :json => {id: params[:id]}, message: 'Record was successfully deleted.'
    end


end
