// Chamar URl
function convertPokemonToList(pokemon) {
  return `  <li class="pokemon ${pokemon.type}">
          <span class="numero">${pokemon.number}</span>
          <span class="nome">${pokemon.name}</span>

          <div class="detalhe">
          <ol class="tipos">
          ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.imagem}" alt=" ${pokemon.name}">
          </div>

          </li>`
}


const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons = []) => {
  const novaHtml = pokemonList.innerHTML = pokemons.map(convertPokemonToList).join('')
  pokemonList.innerHTML = novaHtml
})










