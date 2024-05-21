import React, { useEffect } from "react";
import CardComponent from "../../card/index.jsx";
import MyChartComponent from "../../charts/linechart/index.jsx";
import TableComponent from "../../table/index.jsx";
import { Box, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./dashboardSlice.js";
import { columns } from "../../../helpers/utils.js";

const Dashboard = () => {
  const maindata = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Box sx={{ height: "90vh" }}>
      {status === "succeeded" && (
        <>
          <CardComponent title={"Retail Sales"}>
            <MyChartComponent data={maindata} />
          </CardComponent>
          <TableComponent columns={columns} data={maindata[0]?.sales} />
        </>
      )}
      {status === "loading" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {status === "failed" && (
        <Box sx={{ color: "red", textAlign: "center" }}>
          <p>Error: {error}</p>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
