import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/app/dashboard/pokemons';

/*
  {
    favorites: {
      '1': { id: '1', name: 'bulbasaur' },
      '2': { id: '2', name: 'ditto' },
    }
  }
*/

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

const initialState: PokemonsState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      state.favorites[id]
        ? delete state.favorites[id]
        : (state.favorites[id] = pokemon);
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
