import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "@utils/localStorage";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
       favoritesPersons: getLocalStorage('favorites')
    },
    reducers: {
        setPersonToFavorite: (state, action) => {
            state.favoritesPersons.push(action.payload);
        },
        removePersonFromFavorite: (state, action) => {
            state.favoritesPersons = state.favoritesPersons.filter(person => person.id !== action.payload.personId);
        }
    }
});

export const { setPersonToFavorite, removePersonFromFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;