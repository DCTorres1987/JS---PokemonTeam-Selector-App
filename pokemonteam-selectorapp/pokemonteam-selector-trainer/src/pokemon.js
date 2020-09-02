class Pokemon {
    // creating and initializing objects created within a class
    constructor(id, name, image, poke_type, team){
    this.id = id;
    this.name = name;
    this.image = image;
    this.poke_type = poke_type;
    this.team = team;
    AppContainer.pokemons.push(this);

    }

  // Handles Initial Pokemon Load
  static renderPokemonLoad(load) {
  
    let eventTeam = load;
    let selectedTeam = document.getElementById('option').value;
    let pokemonOnTeam = [];
    team.innerHTML = "";
    
          AppContainer.pokemons.forEach( pokemon => {

              if (eventTeam === pokemon.team.name) {
                  pokemonOnTeam.push(pokemon)                  
              };

          });     

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
      PokemonActions.deletePokemon();
    };

    // Handles change in Team Option Select Event
    static renderPokemonEvent (event) {

      let eventTeam = event.target.value;
      let selectedTeam = document.getElementById('option').value;  
      let pokemonOnTeam = [];
      team.innerHTML = "";
      
          AppContainer.pokemons.forEach( pokemon => {
  
              if (eventTeam === pokemon.team.name) {
                  pokemonOnTeam.push(pokemon)
              };
              
          });   
     
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
          PokemonActions.deletePokemon();
    };
}