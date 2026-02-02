const API_BASE = 'https://pokeapi.co/api/v2';

async function getPokemonList(limit, offset) {
  const response = await fetch(`${API_BASE}/pokemon?limit=${limit}&offset=${offset}`);
  return response.json();
}

async function getPokemonDetail(name) {
  const response = await fetch(`${API_BASE}/pokemon/${name}`);
  return response.json();
}
