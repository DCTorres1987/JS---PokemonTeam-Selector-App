class Pokemon {
    // creating and initializing objects created within a class
    constructor(name, image, poke_type, team){
    this.name = name;
    this.image = image;
    this.poke_type = poke_type;
    this.team = team;
    AppContainer.pokemons.push(this);

    }

    
}