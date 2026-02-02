const detailContainer = document.getElementById('pokemon-detail');
const params = new URLSearchParams(window.location.search);
const pokemonName = params.get('name');

async function loadPokemonDetail() {
  const pokemon = await getPokemonDetail(pokemonName);

  const types = pokemon.types.map(t => t.type.name).join(', ');

  detailContainer.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p><strong>Altura:</strong> ${pokemon.height}</p>
    <p><strong>Peso:</strong> ${pokemon.weight}</p>
    <p><strong>Tipos:</strong> ${types}</p>
  `;
}

loadPokemonDetail();
