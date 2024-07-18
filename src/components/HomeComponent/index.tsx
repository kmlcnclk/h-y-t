import { Box, Typography } from "@mui/material";
import React from "react";

function HomeComponent() {
  return (
    <Box
      sx={{
        mt: "70px",
        display: "flex",
        height: "calc(100vh - 70px)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: 600,
        }}
      >
        This system is a billing system for billing management
      </Typography>
    </Box>
  );
}

export default HomeComponent;
