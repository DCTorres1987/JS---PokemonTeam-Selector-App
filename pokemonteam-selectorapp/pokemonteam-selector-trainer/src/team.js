class Team {
    constructor(name) {
        this.name = name;
        AppContainer.teams.push(this);
    }

    // Handles Initial Team Load
    static renderTeamLoad() { 
      
        let pokeTeams = [];
            selectedTeam.innerHTML = "";

        AppContainer.teams.forEach(team => {
            
            if (!pokeTeams.includes(team.name))
                { pokeTeams.push(team.name)}
        }); 
    
        pokeTeams.map( team=>  {   

          const option = document.createElement('option');
                option.value = team;
                option.className = "team";
                option.innerText = team;
                selectedTeam.appendChild(option);
        });

        // Handles Team Name Select Changes
        // _________________________________________________________________________________
        let option = document.getElementById('option');
        let load = option.value;

        Pokemon.renderPokemonLoad(load);

        option.addEventListener('change', () =>Pokemon.renderPokemonEvent(event));        
    };


    // Renders New Team to the DOM
    static renderNewTeam (data) {


        const teamname = data;
        const option = document.createElement('option');        
              selectedTeam.innerHTML = "";
              option.value = teamname;
              option.className = "team";
              option.innerText = teamname;
              selectedTeam.appendChild(option);
        const load = option.value;
    
        Team.renderTeamLoad();
    };
}