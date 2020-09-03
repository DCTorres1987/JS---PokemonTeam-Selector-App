let team = document.getElementById('team'); 
let selectedTeam = document.querySelector('select');

class AppContainer {
    
    static pokemons = []
    static teams = []
    url = "http://localhost:3000/pokemons"
    teamurl = "http://localhost:3000/teams"


// Setup Event Listner on Submit Form
    bindEventListeners() {
              
        const teamForm = document.getElementById('teamform');
        teamForm.addEventListener('submit', () => TeamActions.createNewTeam(event));
    }

// Fetches Pokemon Data and Render JSON
    getPokemons() {
        fetch(this.url)
        .then(resp => resp.json())
        .then(data => {
    
            data.forEach(pokemon => {
                
                new Pokemon(pokemon.id, pokemon.name, pokemon.image, pokemon.poke_type, pokemon.team);
                new Team(pokemon.team.name);
            });
            // call renderPokemons
            Team.renderTeamLoad();      
        })
        .catch(err => console.log(err))        
    };

    // Function used in Pokemon Action to Delete Pokemon
    static delete(pokemonId) {
        AppContainer.pokemons = AppContainer.pokemons.filter(pokemon => parseInt(pokemonId) !== pokemon.id)
      }
  
    
}
