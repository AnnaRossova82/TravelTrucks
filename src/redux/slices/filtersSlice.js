import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        equipment: {
            AC: false,
            Automatic: false,
            Kitchen: false,
            TV: false,
            Bathroom: false,
        },
        vehicleType: '', 
        appliedFilters: {
            equipment: {},
            vehicleType: '',
        },
        selectedFilters: {
            equipment: {},
            vehicleType: '',
        },
        activeFilters: {
            Van: false,
            'Fully Integrated': false,
            Alcove: false,
        },
        errorMessage: '',
    },
    reducers: {
        setEquipmentFilter(state, action) {
            const { key, value } = action.payload;
            state.equipment[key] = value;
            state.selectedFilters.equipment[key] = value;
        },
        setVehicleTypeFilter(state, action) {
            const { value } = action.payload;
            if (state.activeFilters[value]) {
                state.vehicleType = value;
                state.selectedFilters.vehicleType = value;
                state.errorMessage = '';
            } else {
                state.errorMessage = 'This filter is not active';
            }
        },
        resetFilters(state) {
            state.equipment = {
                AC: false,
                Automatic: false,
                Kitchen: false,
                TV: false,
                Bathroom: false,
            };
            state.vehicleType = '';
            state.selectedFilters = {
                equipment: {},
                vehicleType: '',
            };
            state.errorMessage = '';
        },
        applyFilters(state) {
            state.appliedFilters = {
                equipment: { ...state.selectedFilters.equipment },
                vehicleType: state.selectedFilters.vehicleType,
            };
        },
        setLocationFilter(state, action) {
            state.location = action.payload;
        },
    },
});

export const { setEquipmentFilter, setVehicleTypeFilter, resetFilters, applyFilters, setLocationFilter } = filtersSlice.actions;
export default filtersSlice.reducer;


