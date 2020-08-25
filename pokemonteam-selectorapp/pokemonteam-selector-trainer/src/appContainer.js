class AppContainer {
    pokemons = []
    categories = []
    url = "http://localhost:3000"
    team = {}

    getPokemons() {
        // make a fetch request to /pokemons
        fetch(this.url + '/pokemons')
        .then(resp => resp.json())
        .then(data => console.log(data))
        // populate the pokemons and categories properties with the returned data
        // call renderPokemons
        .catch(err => alert(err))

    }

    renderPokemon() {
        // create DOM nodes and insert data into them to render in DOM

    }
}