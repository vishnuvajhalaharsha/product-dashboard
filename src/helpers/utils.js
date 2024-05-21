export const columns = [
    { id: 'weekEnding', label: 'Week Ending' },
    { id: 'retailSales', label: 'Retail Sales', align: 'right' },
    { id: 'wholesaleSales', label: 'Wholesale Sales', align: 'right' },
    { id: 'unitsSold', label: 'Units Sold', align: 'right' },
    { id: 'retailerMargin', label: 'Retailer Margin', align: 'right' }
  ];

  export function formatAsDollar(amount) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(amount);
  }