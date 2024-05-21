import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const CardComponent = ({ title, children }) => {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
       {children}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
