import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { imageTypeReducer } from './imageTypeSlice';
import { pokemonsReducer } from './pokemonsSlice';

export const store = configureStore({
  reducer: {
      imageType: imageTypeReducer,
      pokemons: pokemonsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()