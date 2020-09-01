let team = document.getElementById('team'); 
let selectedTeam = document.querySelector('select');

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
       
        pokemonOnTeam.forEach( pokemon => {

        let div = document.createElement('div');
        div.className = "card";

        let img = document.createElement('img');
        img.src = pokemon.image; 

        let h2 = document.createElement('h2');
        h2.innerText = pokemon.name;

        let p = document.createElement('p');
        p.innerText = 'Type: ' + pokemon.poke_type;

        let br1 = document.createElement('br');
        let br2 = document.createElement('br');

        let deletebtn = document.createElement('button');
        deletebtn.type = 'delete';
        deletebtn.id = pokemon.id;
        deletebtn.className = 'deletebtn';
        deletebtn.innerText = 'Delete';


        team.appendChild(div);
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(br1);
        div.appendChild(br2);
        div.appendChild(deletebtn);

        
        })    



            // `
            //         <div class="card" id =${pokemon.id}>
            //             <img src = "${pokemon.image}"/>
            //             <h2>${pokemon.name}</h2>
            //             <p>Type: ${pokemon.poke_type}</p>
            //             <br><br>
            //             <button type="delete" id=${pokemon.id} class="deletebtn">Delete</button>
            //         </div>
            //    `       
           
        //    team.innerHTML = pokemonHTMLString

//Below Handles Delete    
// ______________________________________________________________________________

    const deletebtns = document.querySelectorAll('.deletebtn');

        deletebtns.forEach( button => {
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
     
            })

        })   
    }
    
// ______________________________________________________________________________

 // Below handles Teams Submit Form
//_______________________________________________________________________________   
    // adds new team from form
    createNewTeam(event) {
        
        event.preventDefault();
        // creates a new team instance prototype property object and saves to variable
        
        let team = new Team(event.target.teamname.value);
        const randomPokemons = [];
        // pushes 4 random pokemons into new array;
        for (let i=0; i< 4; i++) {      
           randomPokemons.push(AppContainer.pokemons[Math.floor(Math.random()*AppContainer.pokemons.length)]);
        };

        // post new team to the api
        fetch ("http://localhost:3000/teams", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: team.name
            })
            })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
       
        // iterates through randomPokemon and post new pokemon associated with new team
        randomPokemons.forEach(pokemon => {

            setTimeout(function(){
                
                new Pokemon(pokemon.id, pokemon.name, pokemon.image, pokemon.poke_type, team)

                fetch ("http://localhost:3000/pokemons", {
                    method: "POST",
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                    name: pokemon.name,
                    image: pokemon.image,
                    poke_type: pokemon.poke_type,
                    team: team
                    })

                })
                    .then(resp => resp.json())
                    .then(data => console.log(data))
                    .catch(err => console.log(err))
            },500)
        })

    // _____________________________________________________________________________
        const pokeTeams = [];
        selectedTeam.innerHTML = "";

        AppContainer.pokemons.forEach(pokemon => {
          
            if (!pokeTeams.includes(pokemon.team.name))
                 { pokeTeams.push(pokemon.team.name)
                }
        });

        

        pokeTeams.map( team => {
          
        let option = document.createElement('option');

            option.value = team;
            option.className = "team";
            option.innerText = team;

            selectedTeam.appendChild(option);
        })
        
        // save teamHTMLString to Select tag in index html
    }
    // ____________________________________________________________________________ 
    
    // retrieves team and render to the DOM (POST)
    // ______________________________________________________________________________
    renderTeam() { 
        const pokeTeams = [];
        selectedTeam.innerHTML = "";

        // Take teams and iterate through the array
        // Only unique names are pushed into array
        AppContainer.teams.forEach(team => {
  
            if (!pokeTeams.includes(team.name))
                { pokeTeams.push(team.name)
                }
        }); 
        // create a new variable and store Teams HTML
        // iterate through pokeTeams array and store Option HTML with team name save in value
        pokeTeams.map( team=>  {   
          let option = document.createElement('option');

            option.value = team;
            option.className = "team";
            option.innerText = team;

            selectedTeam.appendChild(option);
        });

        // save teamHTMLString to Select tag in index html
        // selectTeam.appendChild(option);

        let option = document.getElementById('option');
        option.addEventListener('change', this.renderPokemon);        
    };

}


// how to add new pokmon object and access on the DOM
// how to delete (release) pokemon team