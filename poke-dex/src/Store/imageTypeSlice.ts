import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { POKEMON_IMAGE_TYPE } from '../Constants'

export type PokemonImageType = typeof POKEMON_IMAGE_TYPE[keyof typeof POKEMON_IMAGE_TYPE]

export interface ImageTypeState {
  type: PokemonImageType
}

const initialState: ImageTypeState = {
  type: POKEMON_IMAGE_TYPE.HOME_FRONT,
}

export const imageTypeSlice = createSlice({
    name: 'imageType',
    initialState,
    reducers: {
        changeImageType: (state, action:PayloadAction<ImageTypeState>) => {
            state.type = action.payload.type
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeImageType } = imageTypeSlice.actions

export const imageTypeReducer = imageTypeSlice.reducer