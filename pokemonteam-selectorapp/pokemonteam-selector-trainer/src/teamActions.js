class TeamActions {

    // Creates New Team
    static createNewTeam(event) {

            event.preventDefault();        
        if (event.target.teamname.value !== ''){
            let team = new Team(event.target.teamname.value); 

            fetch (teamurl, {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({name: team.name})
            })
            .then(resp => resp.json())
            .then(data => {
                
                console.log(data);
                PokemonActions.getRandomPokemon(data);  
                console.log(`Welcome ${team.name}!`)          
            })            
            .catch(err => console.log(err))
        } else {alert('Team cannot be blank!')}
        
    }

}