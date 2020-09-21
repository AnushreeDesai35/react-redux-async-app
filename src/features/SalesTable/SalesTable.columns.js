export default [
    {
      name: 'weekEnding',
      title: 'WEEK ENDING',
      dataType: 'date',
      getCellValue: ({ weekEnding }) => {
        try {

        var date = new Date(weekEnding);
        if (!isNaN(date.getTime())) {

            const year = date.getFullYear()

            const month = `${date.getMonth() + 1}`.padStart(2, "0")

            const day = `${date.getDate()}`.padStart(2, "0")

            return [month, day, year].join("-")

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
  