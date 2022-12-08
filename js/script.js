// Chamar URl


function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="tipo">${typeSlot.type.name}</li>`)


}

function convertPokemonToList(pokemon) {
  return `  <li class="pokemon">
          <span class="numero">${pokemon.order}</span>
          <span class="nome">${pokemon.name}</span>

          <div class="detalhe">
            <ol class="tipos">
              ${convertPokemonTypesToLi(pokemon.types).join(' ')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt=" ${pokemon.name}">
          </div>

          </li>`
}


const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons = []) => {
  const novaHtml = pokemonList.innerHTML = pokemons.map(convertPokemonToList).join('')
  pokemonList.innerHTML = novaHtml
})










