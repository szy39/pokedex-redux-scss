import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { AppSlice } from "./slices/AppSlice"
import { PokemonSlice } from "./slices/PokemonSlice"



export const store = configureStore({
  reducer: {
    app:AppSlice.reducer,
    pokemon:PokemonSlice.reducer
  },
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>