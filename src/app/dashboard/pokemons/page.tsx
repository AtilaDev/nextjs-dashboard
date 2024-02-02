import { SimplePokemon } from '@/app/dashboard/pokemons';
import { PokemonsResponse } from '@/app/dashboard/pokemons/interfaces/pokemons-response';
import { PokemonGrid } from '@/pokemons';

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('Algo malió sal')

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className='flex flex-col p-2'>
      <span className='text-5xl my-2'>
        Lista de Pokemons <small>estático</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
