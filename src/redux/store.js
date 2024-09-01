import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './slices/vehiclesSlice';
import filtersReducer from './slices/filtersSlice'; 

export const store = configureStore({
    reducer: {
        vehicles: vehiclesReducer,
        filters: filtersReducer, 
    },
});