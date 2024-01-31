import { SimplePokemon } from '@/app/dashboard/pokemons/interfaces';
import { PokemonCard } from '.';

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
