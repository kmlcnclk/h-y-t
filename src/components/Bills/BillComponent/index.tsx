"use client";

import { RootState } from "@/store";
import { BillsValueType } from "@/store/slices/billsSlice";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function BillComponent() {
  const billsValues: BillsValueType = useSelector(
    (state: RootState) => state.bills.value
  ) as BillsValueType;

  return (
    <Box
      sx={{
        mt: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 70px)",
      }}
    >
      {billsValues.bills[0] ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Surname</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {billsValues.bills.map((row) => (
                <TableRow
                  key={row.date}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.surname}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
