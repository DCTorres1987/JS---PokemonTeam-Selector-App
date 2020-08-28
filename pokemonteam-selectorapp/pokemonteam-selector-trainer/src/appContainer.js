class AppContainer {
    
  
    team = document.getElementById('team');

   
    // retrieve a pokemon json data passed in from backend api
    getPokemons() {
        fetch("http://localhost:3000/pokemons")
        .then(resp => resp.json())
        .then(data => {
         let randomPokemon = []

            for (let i=0; i< 4; i++) {
                randomPokemon.push(data[Math.floor(Math.random()*data.length)]);
            };

            const pokemonHTMLString = randomPokemon.map( pokemon =>  `
                    <li class="card">
                        <img src = "${pokemon.image}"/>
                        <h2>${pokemon.name}</h2>
                        <p>Type: ${pokemon.category.name}
                    </li>
                `).join('');      
                team.innerHTML = pokemonHTMLString      
            })
        .catch(err => alert(err))
        
    }

    addPokemon() {
        console.log('Listening')
    }

    EventListeners() {
        const addBtn = document.querySelector('button');
        const submitBtn = document.querySelector('button.btn');
        addBtn.addEventListener('click', this.getPokemons);
        submitBtn.addEventListener('click', this.addPokemon);
    }


   
}