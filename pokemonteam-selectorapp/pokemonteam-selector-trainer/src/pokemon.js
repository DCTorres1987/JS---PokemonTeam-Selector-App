class Pokemon {
    constructor(name, image){
    this.name = name;
    this.image = image;
    AppContainer.pokemons.push(this);
    }
}