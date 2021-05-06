class PokemonActions {  
    
    static getRandomPokemon (data) {
        

        let teamname = data.name;
        let teamInt = data;
        const randomPokemons = [];

        for (let i=0; i< 4; i++) {      
            randomPokemons.push(AppContainer.pokemons[Math.floor(Math.random()*AppContainer.pokemons.length)]);
        };

        let pokemonName = randomPokemons[0].name;
        let pokemonImage = randomPokemons[0].image;
        let pokemonType = randomPokemons[0].poke_type;

     
        fetch (url, {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
            name: pokemonName, 
            image: pokemonImage,
            poke_type: pokemonType,
            team: teamInt,
            })    
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            new Pokemon(data.id, data.name, data.image, data.poke_type, teamInt);
            console.log(`Welcome ${pokemonName} to the Team!`)
            
        })
        .catch(err => console.log(err))        
 

        Team.renderNewTeam(teamname);
        
    }   

    //Below Handles Delete    
    // ______________________________________________________________________________

    static deletePokemon() {

        const deletebtns = document.querySelectorAll('.deletebtn');

        deletebtns.forEach( button => {

            button.addEventListener("click", (e) => {

            let targetId = e.target.id
            
                AppContainer.pokemons.forEach(pokemon => {    

                    if (parseInt(targetId) === pokemon.id)               
                            {fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
                            method: "DELETE"
                            })
                            .then(resp => resp.json())
                            .then(data => {
                                console.log(`Goodbye ${pokemon.name}. Be free!`);
                                AppContainer.delete(data.id);
                                e.target.parentElement.remove();

                            })
                            .catch(err => console.log(err))};
                }); 
            });
        });
    };    
};