let team = document.getElementById('team'); 
let selectTeam = document.getElementById('option');

class AppContainer {
    
    static pokemons = []
    static teams = []
    static newTeam = []
    url = "http://localhost:3000/pokemons"
    teamurl = "http://localhost:3000/teams"


    bindEventListeners() {
              
        const teamForm = document.getElementById('teamform');
        teamForm.addEventListener('submit', () => this.createNewTeam(event));
    }

    // retrieves pokemon from json (POST)
// __________________________________________________________________________
    getPokemons() {
        fetch(this.url)
        .then(resp => resp.json())
        .then(data => {
            
            data.forEach(pokemon => {
                new Pokemon(pokemon.id, pokemon.name, pokemon.image, pokemon.poke_type, pokemon.team);
                new Team(pokemon.team.name);
            });
            // call renderPokemons
            this.renderTeam(); 
            this.renderPokemon();       
        })
        .catch(err => alert(err))        
    };

    // ______________________________________________________________________________
    // retrieves pokemon and render them to DOM 
    renderPokemon () {

        let selectedTeam = document.getElementById('option').value;
        let pokemonOnTeam = [];
        team.innerHTML = "";

            AppContainer.pokemons.forEach( pokemon => {
                if (selectedTeam === pokemon.team.name) {
                    pokemonOnTeam.push(pokemon)
                }
            })        
        
        const pokemonHTMLString = pokemonOnTeam.map( pokemon =>       
            `
                    <div class="card" id =${pokemon.id}>
                        <img src = "${pokemon.image}"/>
                        <h2>${pokemon.name}</h2>
                        <p>Type: ${pokemon.poke_type}</p>
                        <br><br>
                        <button type="delete" id=${pokemon.id} class="deletebtn">Delete</button>
                    </div>
               `       
        ).join('');
           
           team.innerHTML = pokemonHTMLString

//Below Handles Delete    
// ______________________________________________________________________________
        const deleteBtn = document.querySelectorAll('.deletebtn');
        deleteBtn.forEach( button => {
            button.addEventListener("click", (e) => {

            let targetId = e.target.id
            
            pokemonOnTeam.forEach(pokemon => {                         
                if (parseInt(targetId) === pokemon.id  && selectedTeam === pokemon.team.name)               
                    {fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
                        method: "DELETE"
                        })
                        .then(resp => resp.json())
                        .then(data => {
                            Pokemon.delete(data.id)
                            e.target.parentElement.remove()
 
                        })
                        .catch(err => alert(err))
                    }
                })
                this.renderPokemon;          
            })

        })   
    }
// ______________________________________________________________________________

 // Below handles Teams Submit Form
//_______________________________________________________________________________   
    // adds new team from form
    createNewTeam(event) {
        
        event.preventDefault();
          
        let team = new Team(event.target.teamname.value);

        let randomPokemons = [];
        for (let i=0; i< 4; i++) {      
           randomPokemons.push(AppContainer.pokemons[Math.floor(Math.random()*AppContainer.pokemons.length)]);
        };
        
        new NewTeam(randomPokemons);

        fetch ("http://localhost:3000/teams", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: team.name
            })
            })
            .then(resp => resp.json())
            .catch(err => console.log(err))
       
        randomPokemons.forEach(pokemon => {
          new Pokemon(pokemon.id, pokemon.name, pokemon.image, pokemon.poke_type, team)

          fetch (this.url, {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
              name: pokemon.name,
              image: pokemon.image,
              poke_type: pokemon.poke_type,
              team: team.name
            })
          })
            .then(resp => resp.json())
            .catch(err => console.log(err))
        })

    // _____________________________________________________________________________
        const pokeTeams = []

        AppContainer.pokemons.forEach(pokemon => {
      
            if (!pokeTeams.includes(pokemon.team.name))
                 { pokeTeams.push(pokemon.team.name)
                }
        });

        const teamHTMLString = pokeTeams.map( team=>     
            `<option value="${team}">${team}</option>`
        ).join('');
        // save teamHTMLString to Select tag in index html
        selectTeam.innerHTML = teamHTMLString

        const option = document.getElementById('option');
        option.addEventListener('change', this.renderPokemon); 
    }
    // ____________________________________________________________________________ 
    
    // retrieves team and render to the DOM (POST)
    // ______________________________________________________________________________
    renderTeam() { 
        const pokeTeams = []

        // Take teams and iterate through the array
        // Only unique names are pushed into array
        AppContainer.teams.forEach(team => {
        
            if (!pokeTeams.includes(team.name))
                { pokeTeams.push(team.name)
                }
        });
        // create a new variable and store Teams HTML
        // iterate through pokeTeams array and store Option HTML with team name save in value
        const teamHTMLString = pokeTeams.map( team=>     
            `<option value="${team}">${team}</option>`
        ).join('');

        // save teamHTMLString to Select tag in index html
        selectTeam.innerHTML = teamHTMLString

        const option = document.getElementById('option');
        option.addEventListener('change', this.renderPokemon);        
    };

}


// how to add new pokmon object and access on the DOM
// how to delete (release) pokemon team