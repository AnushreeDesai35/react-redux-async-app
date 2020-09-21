import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
    SortingState,
    IntegratedSorting,
    PagingState,
    IntegratedPaging,
  } from '@devexpress/dx-react-grid';
  import {
    Grid,
    Table,
    TableHeaderRow,
    PagingPanel,
  } from '@devexpress/dx-react-grid-material-ui';
  import columns from './SalesTable.columns';
  import { Plugin } from "@devexpress/dx-react-core";

const pageSizes = [10, 20, 30];

const SalesTable = ({salesData}) => {

  const rows = useMemo(
    () =>
    salesData.sales.map((sale, index) => {
      
      return {...sale, index};
    }),
    [salesData.sales],
    );
    
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const plugins = [];
    plugins.push(<PagingState
      pageSize={pageSize}
      onPageSizeChange={setPageSize}
      currentPage={currentPage}
      onCurrentPageChange={setCurrentPage}
      defaultCurrentPage={1}
      defaultPageSize={20}
    />);
    plugins.push(<IntegratedPaging />);
    plugins.push(<SortingState />);
    plugins.push(<IntegratedSorting />);
    plugins.push(<Table />);
    plugins.push(<TableHeaderRow showSortingControls/>);
    plugins.push(<PagingPanel pageSizes={pageSizes} />);
    return (
        <Grid key={plugins.length} rows={rows} columns={columns}>
        {plugins.map((plugin, index) => (
            <Plugin key={index}>{plugin}</Plugin>
          ))}
        </Grid>
    );
};

SalesTable.propTypes = {
    salesData: PropTypes.shape(
      {
        id: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
        subtitle: PropTypes.string,
        brand: PropTypes.string,
        reviews: PropTypes.array,
        retailer: PropTypes.string,
        details: PropTypes.array,
        tags: PropTypes.array,
        sales: PropTypes.array,
      }
    )
  };
  

export default SalesTable;