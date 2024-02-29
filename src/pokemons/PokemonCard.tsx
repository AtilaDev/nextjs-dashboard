import Link from 'next/link';
import Image from 'next/image';
import { SimplePokemon } from '@/app/dashboard/pokemons';
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { name } = pokemon;

  return (
    <div className='mx-auto right-0 mt-2 w-60'>
      <div className='bg-white rounded overflow-hidden shadow-lg'>
        <div className='flex flex-col text-center justify-center items-center p-6 bg-gray-800 border-b'>
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
          />

          <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>
            {name}
          </p>
          <div className='mt-5'>
            <Link
              href={`/dashboard/pokemon/${name}`}
              className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
            >
              Mas información
            </Link>
          </div>
        </div>
        <div className='border-b'>
          <Link
            href='/account/campaigns'
            className='px-4 py-2 hover:bg-gray-100 flex items-center'
          >
            <div className='text-red-600'>
              <IoHeartOutline />
            </div>
            <div className='pl-3'>
              <p className='text-sm font-medium text-gray-800 leading-none'>
                No es favorito
              </p>
              <p className='text-xs text-gray-500'>View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
