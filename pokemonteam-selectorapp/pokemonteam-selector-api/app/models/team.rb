class Team < ApplicationRecord
    has_many :pokemons
    validates :name, :presence => { :message => " cannot be blank" }
end
