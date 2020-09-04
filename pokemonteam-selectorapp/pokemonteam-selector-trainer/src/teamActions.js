class TeamActions {

    // Creates New Team
    static createNewTeam(event) {
        
        event.preventDefault();        
        if (event.target.teamname.value !== ''){
            let team = new Team(event.target.teamname.value); 

            fetch ("http://localhost:3000/teams", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({name: team.name})
            })
            .then(resp => resp.json())
            .then(data => {
                
                console.log(data);
                PokemonActions.getRandomPokemon(data);            
            })            
            .catch(err => console.log(err))
        } else {alert('Team cannot be blank!')}
        
    }

}