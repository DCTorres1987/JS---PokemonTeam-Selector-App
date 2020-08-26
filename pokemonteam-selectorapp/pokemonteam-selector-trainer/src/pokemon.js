class Pokemon {
    constructor(name, image, category){
    this.name = name;
    this.image = image;
    this.category = category;
    AppContainer.pokemons.push(this);
    }

    // filters pokemon by Category
    static byCategory(categoryName) {
        return AppContainer.pokemons.filter(activity => activity.category.name === categoryName)
    }
}