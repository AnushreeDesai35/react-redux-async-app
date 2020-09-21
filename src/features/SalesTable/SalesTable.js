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
    Toolbar,
    SearchPanel,
    TableSelection,
  } from '@devexpress/dx-react-grid-material-ui';
  import columns from './SalesTable.columns';

const pageSizes = [10, 20, 30];

const SalesTable = ({salesData}) => {

    const rows = useMemo(
        () =>
        salesData.sales.map((sale, index) => {
            return {...sale, index};
          }),
        [salesData.sales],
      );
    
    console.log(rows);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <Grid rows={rows} columns={columns}>
        <PagingState
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
          currentPage={currentPage}
          onCurrentPageChange={setCurrentPage}
          defaultCurrentPage={1}
          defaultPageSize={20}
        />
        <IntegratedPaging />
        <SortingState />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow showSortingControls/>
        <PagingPanel pageSizes={pageSizes} />
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