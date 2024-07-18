"use client";

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress } from "@mui/material";
import { whiteTextFieldCss } from "@/common";
import { SignInDataType } from "@/types/auth";
import { toast } from "react-toastify";

function SignInComponent() {
  const [isClient, setIsClient] = useState(false);

  const [signInData, setSignInData] = useState<SignInDataType>({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch(`/api/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInData),
    });

    const data = await res.json();
    if (res.ok) {
      setIsLoading(false);
      toast.success(data.message);
    } else {
      setIsLoading(false);
      if (data?.message) toast.error(data.message);
      else if (data?.error) toast.error(data.error.message);
      else if (data[0]) toast.error(data[0].message);
    }
  };

  const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInData((prev: SignInDataType) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box
      component="main"
      sx={{
        mt: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isClient ? (
        <Box
          component={Paper}
          sx={{
            background: "rgba(217, 217, 217, 0.1)",
            boxShadow: "0px 4px 20px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "30px",
            px: { xs: "25px", md: "50px" },
            py: { xs: "25px", md: "40px" },
            width: { xs: "310px", sm: "420px", md: "520px", xl: "600px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              color: "white",
              mb: { xs: "5px", md: "20px" },
              mt: "5px",
            }}
          >
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              sx={whiteTextFieldCss}
              size="small"
              placeholder="E-Mail"
              value={signInData.email}
              name="email"
              onChange={onChangeFunc}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              sx={whiteTextFieldCss}
              size="small"
              type="password"
              placeholder="Password"
              value={signInData.password}
              name="password"
              onChange={onChangeFunc}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  background:
                    "linear-gradient(90deg, #FFBAF8 0%, #84CCF4 100%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                Forgot Password?
              </Typography>
            </Box>

            <Button
              sx={{
                background: "linear-gradient(90deg, #FC9BB3 0%, #7673FE 100%)",
                boxShadow: "0px 4px 10px 1px #00000040",
                borderRadius: "10px",
                width: "100%",
                height: "50px",
                my: "10px",
              }}
              type="submit"
            >
              {isLoading ? (
                <CircularProgress size={30} sx={{ color: "#f3f3f3" }} />
              ) : (
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                  }}
                >
                  SIGN IN
                </Typography>
              )}
            </Button>

            <Typography
              sx={{ textAlign: "center", mt: "20px", color: "white" }}
            >
              Do you have an account?
              <Link
                href="/auth/sign-up"
                sx={{
                  marginLeft: "10px",
                  fontWeight: "bold",
                  background:
                    "linear-gradient(180deg, #FC9BB3 0%, #7FABF4 100%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SIGN UP
              </Link>
            </Typography>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}

export default SignInComponent;
