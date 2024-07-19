"use client";

import { Invoice } from "@/types/bills";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function BillComponent() {
  const [bills, setBills] = useState<Invoice[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/bills/get-all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        setBills(data.bills);
      } else {
        if (data?.message) toast.error(data.message);
        else if (data?.error) toast.error(data.error.message);
        else if (data[0]) toast.error(data[0].message);
      }
    };

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: "invoiceNumber", headerName: "Invoice Number", width: 150 },
    { field: "invoiceDate", headerName: "Invoice Date", width: 150 },
    { field: "sellerName", headerName: "Seller Name", width: 150 },
    { field: "sellerTaxOffice", headerName: "Seller Tax Office", width: 150 },
    { field: "sellerTaxNumber", headerName: "Seller Tax Number", width: 150 },
    { field: "sellerPhone", headerName: "Seller Phone", width: 150 },
    { field: "sellerEmail", headerName: "Seller Email", width: 200 },
    { field: "sellerAddress", headerName: "Seller Address", width: 200 },
    { field: "buyerName", headerName: "Buyer Name", width: 150 },
    { field: "buyerTaxOffice", headerName: "Buyer Tax Office", width: 150 },
    { field: "buyerTaxNumber", headerName: "Buyer Tax Number", width: 150 },
    { field: "buyerPhone", headerName: "Buyer Phone", width: 150 },
    { field: "buyerEmail", headerName: "Buyer Email", width: 200 },
    { field: "buyerAddress", headerName: "Buyer Address", width: 200 },
    { field: "paymentTerms", headerName: "Payment Terms", width: 150 },
  ];

  const rows = bills.map((bill, index) => ({
    id: index,
    ...bill,
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
      {bills.length > 0 ? (
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            sx={{
              bgcolor: "white",
            }}
          />
        </div>
      ) : (
        <Typography
          sx={{
            color: "white",
            fontWeight: 600,
          }}
        >
          You do not have any bills yet.
        </Typography>
      )}
    </Box>
  );
}

export default BillComponent;
