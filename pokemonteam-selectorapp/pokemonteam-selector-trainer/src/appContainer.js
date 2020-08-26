class AppContainer {
    // static method for a class
    static pokemons = []
    static categories = []
    static team = {}
    // set as the localhost url
    url = "http://localhost:3000"
    // static method for a class
    

    // create an event listener on button
    bindEventListeners() {
        // retrieves createTeam button set as const variable (can't be reassigned)
        // creates an click event listener on button runs gerRandomPokemons funcion and binds to App Container 
        const btn = document.getElementById('createTeam');        
        btn.addEventListener('click', this.getRandomPokemons)
    }

    getRandomPokemons() {
        let randomPokemons = [];
        AppContainer.categories.forEach(category => {
            randomPokemons.push(Pokemon.byCategory(category.name)[Math.floor(Math.random()*Pokemon.byCategory(category.name).length)])
        });

        // instantiate a Pokemon Team instance with random pokemon
        new Team(randomPokemons)
        const teamDiv = document.getElementById('team');
        AppContainer.team.pokemons.forEach(team => {
            const pokemonImg = document.createElement('img');
            pokemonImg.src = team.image;
            teamDiv.appendChild(pokemonImg);
        })
    }


     getPokemons() {
        // make a fetch request to /pokemons
        fetch(this.url + '/pokemons')
        .then(resp => resp.json())
        .then(data => {
            console.log(AppContainer.pokemons)          
                    // populate the pokemons and categories properties with the returned data
            data.forEach(pokemon => {      

                new Pokemon(pokemon.name, pokemon.image, pokemon.category.name)
            });
            // call renderPokemons
            this.renderPokemons();
        })

        .catch(err => alert(err));
    };

    renderPokemons() {
        // create DOM nodes and insert data into them to render in DOM
        const grassSelect = document.getElementById('grass');
        const normalSelect = document.getElementById('normal'); 
        const fightingSelect = document.getElementById('fighting');
        const poisonSelect = document.getElementById('poison');
        const groundSelect = document.getElementById('ground');
        const rockSelect = document.getElementById('rock');
        const bugSelect = document.getElementById('bug');
        const ghostSelect = document.getElementById('ghost');
        const steelSelect = document.getElementById('steel');
        const fireSelect = document.getElementById('fire');
        const waterSelect = document.getElementById('water');
        const electricSelect = document.getElementById('electric');
        const psychicSelect = document.getElementById('psychic');
        const iceSelect = document.getElementById('ice');
        const fairySelect = document.getElementById('fairy');
        const darkSelect = document.getElementById('dark');

        AppContainer.pokemons.forEach(pokemon => {
            const option = document.createElement('option'); 
                       
            option.innerText = pokemon.name;

            const img = document.createElement('img');
            // option.src = pokemon.image;
            // where we append it will be conditional based on the pokemon type chosen
            switch(pokemon.category){
                case "normal":
                        normalSelect.appendChild(option);
                    break;
                case "grass":
                        grassSelect.appendChild(option);
                    break;
                case "fighting":
                        fightingSelect.appendChild(option);
                    break;
                case "poison":
                        poisonSelect.appendChild(option);
                    break;
                case "ground":
                        groundSelect.appendChild(option);
                    break;
                case "rock":
                        rockSelect.appendChild(option);
                break;
                case "bug":
                        bugSelect.appendChild(option);
                break;
                case "ghost":
                        ghostSelect.appendChild(option);
                break;
                case "steel":
                        steelSelect.appendChild(option);
                break;
                case "fire":
                        fireSelect.appendChild(option);
                break; 
                case "electric":
                        electricSelect.appendChild(option);
                break;
                case "psychic":
                        psychicSelect.appendChild(option);
                break;
                case "ice":
                        iceSelect.appendChild(option);
                break;
                case "fairy":
                        fairySelect.appendChild(option);
                break;
                case "dark":
                        darkSelect.appendChild(option);
                break;
                default:
            }
        })
    };
}