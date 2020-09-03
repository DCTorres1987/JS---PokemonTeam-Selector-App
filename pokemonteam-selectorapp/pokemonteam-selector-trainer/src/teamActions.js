class TeamActions {

    // Creates New Team
    static createNewTeam(event) {
        
        event.preventDefault();
        
        let team = new Team(event.target.teamname.value);
 

        fetch ("http://localhost:3000/teams", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: team.name
            })
            })
            .then(resp => resp.json())
            .then(data => {
              
                console.log(data);
                PokemonActions.createNewPokemon(data);
                
            })            
            .catch(err => console.log(err))
    }

}