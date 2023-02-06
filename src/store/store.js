import { configureStore } from '@reduxjs/toolkit';
import favorivesSlice from '@store/redux-slices/favoritesSlice';
import { setLocalStorage } from '@utils/localStorage';

const store = configureStore({
    reducer : {
        favorites: favorivesSlice
    }
})

// export default configureStore({
//     reducer : {
//         favorites: favorivesSlice
//     }
// })

store.subscribe(() => {
    setLocalStorage('favorites', store.getState().favorites.favoritesPersons)
})

export default store