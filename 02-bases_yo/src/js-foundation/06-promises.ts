// const getPokemonById = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   return fetch(url)
//     .then(response => response.json())
//     // .then(() => { throw new Error("Pokemon no existe.") })
//     .then(data => data.name)
// }

// const getPokemonById = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   const response = await fetch(url);
//   const pokemon = await response.json();
//   return pokemon.name;
// }
import { http } from '../plugins'

export const getPokemonById = async (id: string | number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await http.get(url);
  return pokemon.name;
}