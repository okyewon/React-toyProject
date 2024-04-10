import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import { fetchPokemonDetailAPI, PokemonDetailType, PokemonListResponseType } from '../Service/pokemonService'

export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchPokemonsDetail',
  async (name: string) => {
    const response = await fetchPokemonDetailAPI(name)
    return response
  },
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