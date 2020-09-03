class PokemonActions {  
    
    static createNewPokemon (data) {

        let teamname = data.name;
        let teamInt = data;
        const randomPokemons = [];


        for (let i=0; i< 2; i++) {      
            randomPokemons.push(AppContainer.pokemons[Math.floor(Math.random()*AppContainer.pokemons.length)]);
        };

            randomPokemons.forEach( (pokemon) =>                   
                setTimeout(function() {

                    fetch ("http://localhost:3000/pokemons", {
                        method: "POST",
                        headers: {'Content-type': 'application/json'},
                        body: JSON.stringify({
                        name: pokemon.name, 
                        image: pokemon.image,
                        poke_type: pokemon.poke_type,
                        team: teamInt,
                        })

                    })
                        .then(resp => resp.json())
                        .then(data => {
                            console.log(data);
                            new Pokemon(data.id, data.name, data.image, data.poke_type, teamInt);
                            
                        })
                        .catch(err => console.log(err))
                })           
        )
        setTimeout(function(){Team.renderNewTeam(teamname),4000});
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
                                console.log(`Deleted Pokemon ${data.id}`);
                                AppContainer.delete(data.id);
                                e.target.parentElement.remove();

                            })
                            .catch(err => console.log(err))};
                }); 
            });
        });
    };    
};