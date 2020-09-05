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

    const eventTeam = load;
    let pokemonOnTeam = [];
    team.innerHTML = "";
    
          AppContainer.pokemons.forEach( pokemon => {

              if (load === pokemon.team.name) {
                  pokemonOnTeam.push(pokemon)                  
              };
          });     
          
          this.renderToDOM(pokemonOnTeam);
    };

    // Handles change in Team Option Select Event
    static renderPokemonEvent (event) {

      const eventTeam = event.target.value; 
      let pokemonOnTeam = [];
          team.innerHTML = "";
      
          AppContainer.pokemons.forEach( pokemon => {
  
              if (eventTeam === pokemon.team.name) {
                  pokemonOnTeam.push(pokemon)
              };              
          });          
          this.renderToDOM(pokemonOnTeam);
    };


    static renderToDOM(pokemonOnTeam) {

      pokemonOnTeam.forEach( pokemon => {

        let div = document.createElement('div');
            div.className = "card";

        let img = document.createElement('img');
            img.src = pokemon.image;
            div.appendChild(img); 

        let h2 = document.createElement('h2');
            h2.innerText = pokemon.name;
            div.appendChild(h2);

        let p = document.createElement('p');
            p.innerText = 'Type: ' + pokemon.poke_type;
            div.appendChild(p);

        const br1 = document.createElement('br');
        const br2 = document.createElement('br');

        let deletebtn = document.createElement('button');
            deletebtn.type = 'delete';
            deletebtn.id = pokemon.id;
            deletebtn.className = 'deletebtn';
            deletebtn.innerText = 'Delete';
            div.appendChild(deletebtn);
            
            div.appendChild(br1);
            div.appendChild(br2);
            team.appendChild(div);                   
      }) 
      PokemonActions.deletePokemon();
    }
}