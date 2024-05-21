import Chart from "react-apexcharts";
import React from "react";


const MyChartComponent = ({data}) => {

  const getMonthYear = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${year}-${month.toString().padStart(2, '0')}`;
  };
  const aggregatedData = data[0].sales.reduce((acc, cur) => {
    const monthYear = getMonthYear(cur.weekEnding);
    
    if (!acc[monthYear]) {
      acc[monthYear] = { retailSales: 0, wholesaleSales: 0 };
    }
    acc[monthYear].retailSales += cur.retailSales;
    acc[monthYear].wholesaleSales += cur.wholesaleSales;
    return acc;
  }, {});

  const categories = Object.keys(aggregatedData);
  const retailSalesSeries = Object.values(aggregatedData).map(item => item.retailSales);
  const wholesaleSalesSeries = Object.values(aggregatedData).map(item => item.wholesaleSales);

  const options = {
    chart: {
      id: "sales-line-chart"
    },
    xaxis: {
      categories: categories
    },
    labels: ["Retail Sales", "Wholesale Sales"]
  };

  const series = [
    {
      name: "Retail Sales",
      data: retailSalesSeries
    },
    {
      name: "Wholesale Sales",
      data: wholesaleSalesSeries
    }
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="line"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default MyChartComponent;


