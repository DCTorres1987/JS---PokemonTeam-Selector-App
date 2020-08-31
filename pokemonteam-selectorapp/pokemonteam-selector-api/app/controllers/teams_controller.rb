class TeamsController < ApplicationController

    def index
        render :json => Team.all
    end

    def create
        team = Team.create(name: params[:name])
        render :json => team
    end

end
