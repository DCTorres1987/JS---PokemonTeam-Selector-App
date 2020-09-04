class TeamsController < ApplicationController

    def index
        render :json => Team.all
    end

    def create

            team = Team.find_or_create_by(name: params[:name]);
            render :json => team
    end

end
