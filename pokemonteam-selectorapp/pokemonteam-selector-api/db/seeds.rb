# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Team.destroy_all;
Pokemon.destroy_all;

Team.create(id: 1, name: "Team Ash");
Team.create(id: 2, name: "Team Misty");
Team.create(id: 3, name: "Team Brock");


Pokemon.create(name: "Bulbasaur", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png", poke_type: "Grass", team_id: 1);
Pokemon.create(name: "Charmander", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Vulpix", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vulpix.png", poke_type: "Fire", team_id: 2);
Pokemon.create(name: "Squirtle", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Poliwag", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwag.png", poke_type: "Water", team_id: 2);
Pokemon.create(name: "Butterfree", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/butterfree.png", poke_type: "Bug", team_id: 1);
Pokemon.create(name: "Scyther", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scyther.png", poke_type: "Bug", team_id: 1);
Pokemon.create(name: "Pidgeot", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png", poke_type: "Normal", team_id: 1);
Pokemon.create(name: "Fearow", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fearow.png", poke_type: "Normal", team_id: 1);
Pokemon.create(name: "Machop", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machop.png", poke_type: "Fighting", team_id: 3);
Pokemon.create(name: "Primeape", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/primeape.png", poke_type: "Fighting", team_id: 1);
Pokemon.create(name: "Alakazam", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png", poke_type: "Psychic", team_id: 3);
Pokemon.create(name: "Dratini", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dratini.png", poke_type: "Dragon", team_id: 2);
Pokemon.create(name: "Pikachu", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikachu.png", poke_type: "Electric", team_id: 1);
Pokemon.create(name: "Voltorb", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/voltorb.png", poke_type: "Electric", team_id: 3);
Pokemon.create(name: "Electric", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/onix.png", poke_type: "Rock", team_id: 3);