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