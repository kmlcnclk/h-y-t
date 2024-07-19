"use client";

import React, { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  Paper,
  Box,
  CircularProgress,
} from "@mui/material";
import { Invoice } from "@/types/bills";
import { toast } from "react-toastify";

const BillCreateComponent = () => {
  const [formData, setFormData] = useState<Invoice>({
    invoiceNumber: "",
    invoiceDate: "",
    sellerName: "",
    sellerTaxOffice: "",
    sellerTaxNumber: "",
    sellerAddress: "",
    sellerPhone: "",
    sellerEmail: "",
    buyerName: "",
    buyerTaxOffice: "",
    buyerTaxNumber: "",
    buyerAddress: "",
    buyerPhone: "",
    buyerEmail: "",
    items: [{ itemName: "", quantity: 0, unitPrice: 0, totalPrice: 0 }],
    subTotal: 0,
    vat: 0,
    discount: 0,
    totalAmount: 0,
    paymentTerms: "",
    bankDetails: "",
    notes: "",
    authorizedSignature: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch(`/api/bills/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
    } else {
      if (data?.message) toast.error(data.message);
      else if (data?.error) toast.error(data.error.message);
      else if (data[0]) toast.error(data[0].message);
    }
    setIsLoading(false);
    setFormData({
      invoiceNumber: "",
      invoiceDate: "",
      sellerName: "",
      sellerTaxOffice: "",
      sellerTaxNumber: "",
      sellerAddress: "",
      sellerPhone: "",
      sellerEmail: "",
      buyerName: "",
      buyerTaxOffice: "",
      buyerTaxNumber: "",
      buyerAddress: "",
      buyerPhone: "",
      buyerEmail: "",
      items: [{ itemName: "", quantity: 0, unitPrice: 0, totalPrice: 0 }],
      subTotal: 0,
      vat: 0,
      discount: 0,
      totalAmount: 0,
      paymentTerms: "",
      bankDetails: "",
      notes: "",
      authorizedSignature: "",
    });
  };

  return (
    <Box
      sx={{
        mt: "100px",
        px: "50px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#fff",
          fontSize: "23px",
          fontWeight: 600,
          mb: "10px",
        }}
      >
        Fatura Formu
      </Typography>
      <Paper style={{ padding: 16 }} component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fatura Numarası"
              name="invoiceNumber"
              value={formData.invoiceNumber}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fatura Tarihi"
              name="invoiceDate"
              type="date"
              value={formData.invoiceDate}
              onChange={handleInputChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Satıcı Adı"
              name="sellerName"
              value={formData.sellerName}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Satıcı Vergi Dairesi"
              name="sellerTaxOffice"
              value={formData.sellerTaxOffice}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Satıcı Vergi Numarası"
              name="sellerTaxNumber"
              value={formData.sellerTaxNumber}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Satıcı Adresi"
              name="sellerAddress"
              value={formData.sellerAddress}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Satıcı Telefonu"
              name="sellerPhone"
              value={formData.sellerPhone}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Satıcı E-postası"
              name="sellerEmail"
              type="email"
              value={formData.sellerEmail}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Alıcı Adı"
              name="buyerName"
              value={formData.buyerName}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Alıcı Vergi Dairesi"
              name="buyerTaxOffice"
              value={formData.buyerTaxOffice}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Alıcı Vergi Numarası"
              name="buyerTaxNumber"
              value={formData.buyerTaxNumber}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Alıcı Adresi"
              name="buyerAddress"
              value={formData.buyerAddress}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Alıcı Telefonu"
              name="buyerPhone"
              value={formData.buyerPhone}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Alıcı E-postası"
              name="buyerEmail"
              type="email"
              value={formData.buyerEmail}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ödeme Şartları"
              name="paymentTerms"
              value={formData.paymentTerms}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Banka Bilgileri"
              name="bankDetails"
              value={formData.bankDetails}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Açıklamalar"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              fullWidth
              multiline
              required
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Yetkili İmza"
              name="authorizedSignature"
              value={formData.authorizedSignature}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ width: "100%", py: "10px" }}
              color="primary"
              type="submit"
            >
              {isLoading ? (
                <CircularProgress size={25} sx={{ color: "#f3f3f3" }} />
              ) : (
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#FFFFFF",
                  }}
                >
                  Faturayı Kaydet
                </Typography>
              )}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default BillCreateComponent;
