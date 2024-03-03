'use client';

import { useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid';

export const PokemonFavorite = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );
  const [pokemons, setPokemons] = useState(favoritePokemons);

  // return <PokemonGrid pokemons={favoritePokemons} />;

  return pokemons.length > 0 ? (
    <PokemonGrid pokemons={pokemons} />
  ) : (
    <NoFavorites />
  );
};

export const NoFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500' />
      <span className='text-3xl'>No hay favoritos</span>
    </div>
  );
};
