import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVehicles = createAsyncThunk(
  'vehicles/fetchVehicles',
  async ({ page = 1 }, { getState }) => {
    const { filters } = getState();
    let query = '';

    if (filters.location) {
      query += `location=${filters.location}&`;
    }

    if (filters.appliedFilters.vehicleType) {
      query += `type=${filters.appliedFilters.vehicleType}&`;
    }

    Object.keys(filters.appliedFilters.equipment).forEach(key => {
      if (filters.appliedFilters.equipment[key]) {
        query += `${key}=true&`;
      }
    });

    query = query ? `?${query.slice(0, -1)}&page=${page}&limit=5` : `?page=${page}&limit=5`;

    try {
      const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers${query}`);
      const items = Array.isArray(response.data) ? response.data : Array.isArray(response.data.items) ? response.data.items : [];
      return {
        items,
        page,
      };
    } catch (error) {
      throw new Error(error.response ? error.response.data.message : error.message);
    }
  }
);

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    items: [],
    currentPage: 1,
    status: 'idle',
    error: null,
  },
  reducers: {
    resetVehicles: (state) => {
      state.items = [];
      state.currentPage = 1;
      state.status = 'idle';
      state.error = null;
    },
    setFilters: (state, action) => {
    state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const newItems = Array.isArray(action.payload.items) ? action.payload.items : [];
        state.items = [...state.items, ...newItems];
        state.currentPage = action.payload.page;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetVehicles, setFilters } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;

