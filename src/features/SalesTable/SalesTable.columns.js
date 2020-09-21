export default [
    {
      name: 'weekEnding',
      title: 'WEEK ENDING',
      dataType: 'date',
      getCellValue: ({ weekEnding }) => {
        try {

        var date = new Date(weekEnding);
        if (!isNaN(date.getTime())) {
            return date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear();
        }
        } catch (e) {
          if (weekEnding) {
            return weekEnding;
          }
  
          return 'Invalid date';
        }
      },
    },
    { name: 'retailSales', title: 'RETAIL SALES' },
    { name: 'retailSales', title: 'WHOLESALE SALES' },
    { name: 'unitsSold', title: 'UNITS SOLD' },
    { name: 'retailerMargin', title: 'RETAILER MARGIN' },
  ];
  