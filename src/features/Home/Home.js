import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSalesData,
} from './salesDataSlice';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { Box, CircularProgress, Grid, LinearProgress, Paper, Typography } from '@material-ui/core';
import SalesTable from '../SalesTable/SalesTable';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }));

export function Home() {
  const salesData = useSelector(state => state.salesData.salesData);
  const isSalesDataLoading = useSelector(state => state.salesData.loading);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchSalesData());
  }, []);

  return (
    <Box m={2}>
        {isSalesDataLoading
        ? <div className={classes.root}>
            <Typography variant="h6">Loading...</Typography>
            <CircularProgress />
         </div>
        :<Grid container spacing={3}>
            <Grid item xs={12} md={3}>
                <Paper elevation={3}>
                <ProductInfo salesData={salesData[0]} />
                </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
                <Paper>
                    <SalesTable salesData={salesData[0]} />
                </Paper>
            </Grid>

        </Grid>
    }
    </Box>
  );
}
