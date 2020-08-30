let team = document.getElementById('team'); 
let selectTeam = document.getElementById('option');

class AppContainer {
    
    static pokemons = []
    static teams = []
    static newTeam = []


    bindEventListeners() {
        
        const addBtn = document.querySelector('button');
        addBtn.addEventListener('click', this.getRandomPokemons); 
           
    }

    // retrieves pokemon from json
    getPokemons() {
        fetch("http://localhost:3000/pokemons")
        .then(resp => resp.json())
        .then(data => {
            
            data.forEach(pokemon => {
                new Pokemon(pokemon.name, pokemon.image, pokemon.poke_type, pokemon.team);
                new Team(pokemon.team.name);
            });
            // call renderPokemons
            this.renderTeam();        
        })
        .catch(err => alert(err))        
    };

    // retrieves team and render to the DOM
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

    // retrieves pokemon and render them to DOM 
    renderPokemon () {

        let selectedTeam = document.getElementById('option').value
        let pokemonOnTeam = []

        AppContainer.pokemons.forEach( pokemon => {
            if (selectedTeam === pokemon.team.name) {
                pokemonOnTeam.push(pokemon)
            }
        })

        const pokemonHTMLString = pokemonOnTeam.map( pokemon =>       
            `
                    <div class="card">
                        <img src = "${pokemon.image}"/>
                        <h2>${pokemon.name}</h2>
                        <p>Type: ${pokemon.poke_type}
                        <br><br>
                        <button type="button" class="deletebtn">Delete</button>
                    </div>
               `       
           ).join('');
           team.innerHTML = pokemonHTMLString
    }
   
    // adds new team from form
    addNewTeam() {
        const teamForm = document.querySelector('.form-container-team');
        teamForm.addEventListener('submit', function(e){
            e.preventDefault();
          
        let team = new Team(e.target.teamname.value);
    
        let randomPokemons = [];
        for (let i=0; i< 4; i++) {
      
           randomPokemons.push(AppContainer.pokemons[Math.floor(Math.random()*AppContainer.pokemons.length)]);
        };
        
        new NewTeam(randomPokemons);
  
        randomPokemons.forEach(pokemon => {
          new Pokemon(pokemon.name, pokemon.image, pokemon.poke_type, team)
        })
        
// How do I Dry Up
// _______________________________________________________
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
// _______________________________________________________  

        });   
        
    }
}

// how to add new team to select on the DOM
// how to add new pokmon object and access on the DOM
// how to delete (release) pokemon team