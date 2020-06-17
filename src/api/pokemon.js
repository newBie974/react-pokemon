import axios from 'axios';

const pokemonApi = async () => {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const allPokemon = await Promise.all(
        data.results.map(({ url }) => axios.get(url)));
    console.log(allPokemon);
    const formatedData = allPokemon.map(({ data }) => {
      const { id, name } = data;
      return { id: `${id}`, name};
    });
    return formatedData;
  } catch (err) {
    return [];
  }
}

export default pokemonApi;
