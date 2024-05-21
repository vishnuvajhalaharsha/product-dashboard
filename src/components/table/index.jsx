import React, {useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

const TableComponent = ({ data }) => {
  if (data.length === 0 || !data[0].sales) {
    return <div>No data available</div>;
  }
  function formatAsDollar(amount) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(amount);
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const columns = [
    { id: 'weekEnding', label: 'Week Ending' },
    { id: 'retailSales', label: 'Retail Sales', align: 'right' },
    { id: 'wholesaleSales', label: 'Wholesale Sales', align: 'right' },
    { id: 'unitsSold', label: 'Units Sold', align: 'right' },
    { id: 'retailerMargin', label: 'Retailer Margin', align: 'right' }
  ];

  return (
    <Paper sx={{marginTop:2}}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
           <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align || 'left'}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
          </TableHead>
          <TableBody>
          {data[0].sales.slice(page * rowsPerPage, page* rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.weekEnding}>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'}>
                  {column.id === 'retailSales' || column.id === 'wholesaleSales' || column.id === 'retailerMargin'
                    ? formatAsDollar(row[column.id])
                    : row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data[0].sales.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableComponent;
