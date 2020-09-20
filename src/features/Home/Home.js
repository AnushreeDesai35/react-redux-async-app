import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSalesData,
} from './salesDataSlice';
import {SideNav} from '../SideNav/SideNav';

export function Home() {
  const salesData = useSelector(state => state.salesData.salesData);
  const isSalesDataLoading = useSelector(state => state.salesData.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSalesData());
  }, []);

  console.log(salesData.loading);

  return (
    <div>
        {isSalesDataLoading
        ? "Loading...": 
        <SideNav salesData={salesData[0]}/>}
    </div>
  );
}
