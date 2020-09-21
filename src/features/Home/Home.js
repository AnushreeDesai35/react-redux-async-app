import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSalesData,
} from './salesDataSlice';
import { ProductInfo } from '../SideNav/ProductInfo';
import { Box, Grid, Paper } from '@material-ui/core';


export function Home() {
  const salesData = useSelector(state => state.salesData.salesData);
  const isSalesDataLoading = useSelector(state => state.salesData.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSalesData());
  }, []);

  console.log(isSalesDataLoading);

  return (
    <Box m={2}>
        {isSalesDataLoading
        ? "Loading...": 
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Paper elevation={3}>
                <ProductInfo salesData={salesData[0]}/>
                </Paper>
            </Grid>
            <Grid item xs={9}></Grid>

        </Grid>
    }
    </Box>
  );
}
