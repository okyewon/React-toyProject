import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { fetchPokemonDetailAPI, PokemonDetailType, PokemonListResponseType } from '../Service/pokemonService'

export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchPokemonsDetail',
  async (name: string) => {
    const response = await fetchPokemonDetailAPI(name)
    return response
  }, {
    condition: (name, { getState }) => {
      const { pokemonDetail } = getState() as RootState
      const pokemon = pokemonDetail.pokemonDetails[name]

      // condition의 return 값이 false이면 2번째 인자의 request를 보내지 X
      return !pokemon;
    }
  }
)

interface PokemonsDetailState {
  // pokemonDetails: {
  //   '이상해씨': PokemonDetailType,
  //   '피카츄': PokemonDetailType,
  // }
  pokemonDetails: Record<string, PokemonDetailType>
}

const initialState = {
  pokemonDetails: {}
} as PokemonsDetailState

// Then, handle actions in your reducers:
const pokemonsDetailSlice = createSlice({
  name: 'pokemonDetail',
  initialState,
  reducers: {
      
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPokemonDetail.fulfilled, (state, action:PayloadAction<PokemonDetailType>) => {
        state.pokemonDetails = {
          ...state.pokemonDetails,
          [action.payload.name]: action.payload
        }
    })
  },
})

export const pokemonDetailReducer = pokemonsDetailSlice.reducer