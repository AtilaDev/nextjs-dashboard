import { Metadata } from 'next';
import { PokemonGrid } from '@/pokemons';

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Lorem ipsum dolor sit amet consectetur',
};

export default async function PokemonsPage() {
  return (
    <div className='flex flex-col p-2'>
      <span className='text-5xl my-2'>
        Pokemons Favoritos <small className='text-blue-500'>Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
