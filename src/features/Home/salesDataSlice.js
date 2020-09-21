import { createSlice } from '@reduxjs/toolkit';

export const salesDataSlice = createSlice({
  name: 'salesData',
  initialState: {
    salesData: [],
    loading: true,
  },
  reducers: {
    fetchDataPending: state => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.salesData = action.payload;
    },
  },
});

export const { fetchDataPending, fetchDataSuccess } = salesDataSlice.actions;

export function fetchSalesData() {
  return function (dispatch) {
    dispatch(fetchDataPending());

    return fetch('Webdev_data2.json')
    .then(response => response.json())
    .then(data => dispatch(fetchDataSuccess(data)))
    .catch(err => console.log(err))
  };
 }


export const salesDataLoading = state => state.loading;
export const stateSalesData = state => state.salesData;

export default salesDataSlice.reducer;
