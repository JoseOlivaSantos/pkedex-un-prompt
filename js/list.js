const listContainer = document.getElementById('pokemon-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let offset = 0;
const limit = 20;

async function loadPokemons() {
  const data = await getPokemonList(limit, offset);
  listContainer.innerHTML = '';

  data.results.forEach(pokemon => {
    const div = document.createElement('div');
    div.className = 'pokemon-card';
    div.innerHTML = `
      <h3>${pokemon.name}</h3>
      <a href="detail.html?name=${pokemon.name}">Ver detalle</a>
    `;
    listContainer.appendChild(div);
  });

  prevBtn.disabled = offset === 0;
}

prevBtn.addEventListener('click', () => {
  offset -= limit;
  loadPokemons();
});

nextBtn.addEventListener('click', () => {
  offset += limit;
  loadPokemons();
});

loadPokemons();
