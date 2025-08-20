import { PokemonTypeInitialState } from "../../utils/Types";
import { createSlice } from "@reduxjs/toolkit";

const initialState:PokemonTypeInitialState ={}



export const PokemonSlice = createSlice({
    name:"pokemon",
    initialState,
    reducers:{},
});

export const {} = PokemonSlice.actions