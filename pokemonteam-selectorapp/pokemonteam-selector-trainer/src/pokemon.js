class Pokemon {
    // creating and initializing objects created within a class
    constructor(id, name, image, poke_type, team){
    this.id = id;
    this.name = name;
    this.image = image;
    this.poke_type = poke_type;
    this.team = team;
    AppContainer.pokemons.push(this);

    }

    static delete(pokemonId) {
      AppContainer.pokemons = AppContainer.pokemons.filter(pokemon => parseInt(pokemonId) !== pokemon.id)
    }
}