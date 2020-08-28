# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all;
Pokemon.destroy_all;

Category.create(id: 1, name: "Normal");
Category.create(id: 2, name: "Flying");
Category.create(id: 3, name: "Fighting");
Category.create(id: 4, name: "Dragon");
Category.create(id: 5, name: "Psychic");
Category.create(id: 6, name: "Rock");
Category.create(id: 7, name: "Ground");
Category.create(id: 8, name: "Electric");
Category.create(id: 9, name: "Poison");
Category.create(id: 10, name: "Grass");
Category.create(id: 11, name: "Fire");
Category.create(id: 12, name: "Water");
Category.create(id: 13, name: "Bug");


Pokemon.create(name: "Bulbasaur", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png", category_id: 10);
Pokemon.create(name: "Charmander", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png", category_id: 11);
Pokemon.create(name: "Vulpix", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vulpix.png", category_id: 11);
Pokemon.create(name: "Squirtle", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png", category_id: 12);
Pokemon.create(name: "Poliwag", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwag.png", category_id: 12);
Pokemon.create(name: "Butterfree", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/butterfree.png", category_id: 13);
Pokemon.create(name: "Scyther", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scyther.png", category_id: 13);
Pokemon.create(name: "Pidgeot", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png", category_id: 2);
Pokemon.create(name: "Fearow", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fearow.png", category_id: 2);
Pokemon.create(name: "Machop", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machop.png", category_id: 3);
Pokemon.create(name: "Primeape", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/primeape.png", category_id: 3);
Pokemon.create(name: "Alakazam", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png", category_id: 5);
Pokemon.create(name: "Dratini", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dratini.png", category_id: 4);
Pokemon.create(name: "Pikachu", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikachu.png", category_id: 8);
Pokemon.create(name: "Voltorb", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/voltorb.png", category_id: 8);
Pokemon.create(name: "Electric", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/onix.png", category_id: 6);