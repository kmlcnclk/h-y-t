"use client";

import { CustomerType } from "@/types/auth";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function CustomerManagementComponent() {
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/customers/get-all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        setCustomers(data.customers);
      } else {
        if (data?.message) toast.error(data.message);
        else if (data?.error) toast.error(data.error.message);
        else if (data[0]) toast.error(data[0].message);
      }
    };

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "surname", headerName: "Surname", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
  ];

  const rows = customers.map((customer, index) => ({
    id: index,
    ...customer,
  }));

  return (
    <Box
      sx={{
        mt: "100px",
        display: "flex",
        justifyContent: "center",
        px: "50px",
      }}
    >
      {customers.length > 0 ? (
        <Box
          sx={{ height: "auto", width: { xs: "100%", md: "70%", lg: "50%" } }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            sx={{
              bgcolor: "white",
            }}
          />
        </Box>
      ) : (
        <Typography
          sx={{
            color: "white",
            fontWeight: 600,
          }}
        >
          You do not have any customers yet.
        </Typography>
      )}
    </Box>
  );
}

export default CustomerManagementComponent;
