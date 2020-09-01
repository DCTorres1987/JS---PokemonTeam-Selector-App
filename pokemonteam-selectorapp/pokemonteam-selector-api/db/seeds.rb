# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Team.destroy_all;
Pokemon.destroy_all;


Team.create(id: 1, name: "Pokemon Sample");


Pokemon.create(name: "Bulbasaur", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png", poke_type: "Grass", team_id: 1);
Pokemon.create(name: "Charmander", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Vulpix", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vulpix.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Squirtle", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Poliwag", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwag.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Butterfree", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/butterfree.png", poke_type: "Bug", team_id: 1);
Pokemon.create(name: "Scyther", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scyther.png", poke_type: "Bug", team_id: 1);
Pokemon.create(name: "Pidgeot", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png", poke_type: "Normal", team_id: 1);
Pokemon.create(name: "Fearow", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fearow.png", poke_type: "Normal", team_id: 1);
Pokemon.create(name: "Machop", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machop.png", poke_type: "Fighting", team_id: 1);
Pokemon.create(name: "Primeape", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/primeape.png", poke_type: "Fighting", team_id: 1);
Pokemon.create(name: "Alakazam", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png", poke_type: "Psychic", team_id: 1);
Pokemon.create(name: "Dratini", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dratini.png", poke_type: "Dragon", team_id: 1);
Pokemon.create(name: "Pikachu", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikachu.png", poke_type: "Electric", team_id: 1);
Pokemon.create(name: "Voltorb", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/voltorb.png", poke_type: "Electric", team_id: 1);
Pokemon.create(name: "Onix", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/onix.png", poke_type: "Rock", team_id: 1);
Pokemon.create(name: "Raichu", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raichu.png", poke_type: "Electric", team_id: 1);
Pokemon.create(name: "Sandslash", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandslash.png", poke_type: "Ground", team_id: 1);
Pokemon.create(name: "Jigglypuff", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jigglypuff.png", poke_type: "Fairy", team_id: 1);
Pokemon.create(name: "Clefairy", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefairy.png", poke_type: "Fairy", team_id: 1);
Pokemon.create(name: "Ninetales", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ninetales.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Venonat", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venonat.png", poke_type: "Bug", team_id: 1);
Pokemon.create(name: "Abra", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/abra.png", poke_type: "Psychic", team_id: 1);
Pokemon.create(name: "Growlithe", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/growlithe.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Arcanine", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arcanine.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Psyduck", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/psyduck.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Meowth", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowth.png", poke_type: "Normal", team_id: 1);
Pokemon.create(name: "Zubat", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zubat.png", poke_type: "Poison", team_id: 1);
Pokemon.create(name: "Haunter", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/haunter.png", poke_type: "Ghost", team_id: 1);
Pokemon.create(name: "Gastly", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gastly.png", poke_type: "Ghost", team_id: 1);
Pokemon.create(name: "Cloyster", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cloyster.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Drowzee", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drowzee.png", poke_type: "Psychic", team_id: 1);
Pokemon.create(name: "Exeggutor", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggutor.png", poke_type: "Grass", team_id: 1);
Pokemon.create(name: "Eevee", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/eevee.png", poke_type: "Normal", team_id: 1);
Pokemon.create(name: "Vaporeon", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vaporeon.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Jolteon", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jolteon.png", poke_type: "Electric", team_id: 1);
Pokemon.create(name: "Flareon", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flareon.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Dragonair", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonair.png", poke_type: "Dragon", team_id: 1);
Pokemon.create(name: "Ditto", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ditto.png", poke_type: "Normal", team_id: 1);
Pokemon.create(name: "Lickitung", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lickitung.png", poke_type: "Normal", team_id: 1);
Pokemon.create(name: "Hitmonlee", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmonlee.png", poke_type: "Fighting", team_id: 1);
Pokemon.create(name: "Gyarados", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gyarados.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Chansey", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chansey.png", poke_type: "Normal", team_id: 1);
Pokemon.create(name: "Marowak", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marowak.png", poke_type: "Ground", team_id: 1);
Pokemon.create(name: "Hypno", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hypno.png", poke_type: "Psychic", team_id: 1);
Pokemon.create(name: "Rhyhorn", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rhyhorn.png", poke_type: "Ground", team_id: 1);
Pokemon.create(name: "Rhydon", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rhydon.png", poke_type: "Ground", team_id: 1);
Pokemon.create(name: "Magmar", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magmar.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Electabuzz", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electabuzz.png", poke_type: "Electric", team_id: 1);
Pokemon.create(name: "Tauros", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tauros.png", poke_type: "Normal", team_id: 1);
Pokemon.create(name: "Muk", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/muk.png", poke_type: "Poison", team_id: 1);
Pokemon.create(name: "Ponyta", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ponyta.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Rapidash", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rapidash.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Slowpoke", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowpoke.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Tentacruel", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tentacruel.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Ivysaur", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ivysaur.png", poke_type: "Grass", team_id: 1);
Pokemon.create(name: "Charmeleon", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmeleon.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Wartortle", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wartortle.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Venusaur", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png", poke_type: "Grass", team_id: 1);
Pokemon.create(name: "Charizard", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png", poke_type: "Fire", team_id: 1);
Pokemon.create(name: "Blastoise", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Golduck", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golduck.png", poke_type: "Water", team_id: 1);
Pokemon.create(name: "Arbok", image:"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arbok.png", poke_type: "Poison", team_id: 1);