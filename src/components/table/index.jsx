import React, {useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import {formatAsDollar} from "../../helpers/utils"

const TableComponent = ({ data, columns }) => {
  if (data.length === 0 || !data) {
    return <div>No data available</div>;
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
 
  console.log(data,'data')

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
          {data.slice(page * rowsPerPage, page* rowsPerPage + rowsPerPage).map((row) => (
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
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableComponent;
