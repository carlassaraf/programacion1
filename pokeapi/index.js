let pokemons = [];

function apiFetchList(limit, offset) {

  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(response => response.json())
  .then(json => {

    pokemons = [];
    json.results.forEach(pokemon => {

      fetch(pokemon.url)
      .then(response => response.json())
      .then(j => {
        pokemons.push(new Pokemon(
          j.name,
          j.id,
          j.sprites.front_default,
          j.types.map(element => element.type.name)
        ));

        // Ordena por ID de forma ascendente
        pokemons.sort((pokemon_1, pokemon_2) => pokemon_1.id - pokemon_2.id);
        mostrarPokemons();
      });

    });

  });

}


function mostrarPokemons() {

  let pokedex = document.querySelector("#pokedex");
  pokedex.innerHTML = "";
  pokemons.forEach(pokemon => pokedex.innerHTML += pokemon.toHTML());
}