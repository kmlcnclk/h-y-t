"use client";

import { Box, Button, Drawer, Menu, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import PaymentsIcon from "@mui/icons-material/Payments";
import AddCardIcon from "@mui/icons-material/AddCard";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

interface Props {}

const Header: React.FC<Props> = () => {
  const headList = [
    {
      name: "Home",
      id: "home",
      link: "/",
      onClick: () => {
        setClickedItem("Home");
        router.push("/");
      },
    },
    {
      name: "Bills",
      id: "bills",
      link: "",
    },
    {
      name: "Customer Management",
      id: "customer-management",
      link: "/customer-management",
      onClick: () => {
        setClickedItem("Customer Management");
        router.push("/customer-management");
      },
    },
  ];

  const billList = [
    {
      name: "All Bills",
      id: "all-bills",
      link: "/bills/all-bills",
      onClick: () => {
        setClickedItem("All Bills");
        router.push("/bills/all-bills");
      },
    },
    {
      name: "Create Bill",
      link: "/bills/create",
      id: "bill-create",
      onClick: () => {
        setClickedItem("Create Bill");
        router.push("/bills/create");
      },
    },
  ];

  const [clickedItem, setClickedItem] = useState("Home");

  const router = useRouter();
  const pathname = usePathname();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openFeaturePopup = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        height: "70px",
        backgroundColor: "#000",
        backdropFilter: "blur(32px)",
        border: "none",
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        boxShadow: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: "100",
        px: { xs: "10px", md: "20px", lg: "40px" },
      }}
    >
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            width: "250px",
            background: "#333",
            height: "100%",
            p: "20px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: "30px",
            }}
          >
            <Typography
              sx={{
                ml: "10px",
                color: "#D59F4E",
              }}
            >
              Next JS
            </Typography>
          </Box>

          {headList.map((hl, i) => (
            <Box
              sx={{
                ml: "20px",
                "*": {
                  textDecoration: "none",
                },
              }}
              key={i}
            >
              {hl.name === "Bills" ? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: "10px",
                    }}
                  >
                    <ReceiptLongIcon
                      sx={{
                        fill: "white",
                      }}
                    />
                    <Typography
                      sx={{
                        ml: "10px",
                        background:
                          pathname === hl.link
                            ? "linear-gradient(90deg, rgb(203,238,85) 0%, rgb(222,228,83) 100%)"
                            : "rgb(130,130,129)",
                        color: "#f3f3f3",
                        display: "inline-flex",
                        WebkitBackgroundClip: "text",
                        fontSize: "15px",
                        cursor: "pointer",
                      }}
                    >
                      {hl.name}
                    </Typography>
                  </Box>
                  {billList.map((bill, i) => (
                    <Box
                      key={i}
                      sx={{
                        ml: "25px",
                        mt: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                        onClick={bill.onClick}
                      >
                        {bill.name === "All Bills" ? (
                          <PaymentsIcon
                            sx={{
                              fill: "white",
                            }}
                          />
                        ) : (
                          <AddCardIcon
                            sx={{
                              fill: "white",
                            }}
                          />
                        )}
                        <Typography
                          sx={{
                            background: "rgb(130,130,129)",
                            color: "#f3f3f3",
                            WebkitBackgroundClip: "text",
                            fontSize: "15px",
                            ml: "10px",
                          }}
                        >
                          {bill.name}
                        </Typography>
                      </Box>
                    </Box>
                  ))}{" "}
                </>
              ) : (
                <>
                  {
                    <Box
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={hl.onClick}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mt: "10px",
                        }}
                      >
                        {hl.name === "Home" ? (
                          <HomeIcon
                            sx={{
                              fill: "white",
                            }}
                          />
                        ) : null}

                        {hl.name === "Customer Management" ? (
                          <PeopleIcon
                            sx={{
                              fill: "white",
                            }}
                          />
                        ) : null}

                        <Typography
                          sx={{
                            ml: "10px",
                            background:
                              pathname === hl.link
                                ? "linear-gradient(90deg, rgb(203,238,85) 0%, rgb(222,228,83) 100%)"
                                : "rgb(255,255,255)",
                            color: "#f3f3f3",

                            WebkitBackgroundClip: "text",
                            fontSize: "15px",
                          }}
                        >
                          {hl.name}
                        </Typography>
                      </Box>
                    </Box>
                  }
                </>
              )}
            </Box>
          ))}
        </Box>
      </Drawer>
      <Button
        variant="text"
        sx={{
          ml: { xs: "0px", md: "20px" },
          display: { xs: "flex", lg: "none" },
          justifyContent: "center",
          alignItems: "center",
          height: "40px",
          px: "30px",
          borderRadius: "5px",
          background: "black",
          color: "black",
        }}
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        <MenuIcon sx={{ fill: "#fff" }} />
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                ml: "10px",
                color: "#D59F4E",
                display: { xs: "none", sm: "block" },
              }}
            >
              Next JS
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          ml: "10px",
          display: { xs: "none", lg: "flex" },
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {headList.map((hl, i) => (
          <Box
            sx={{
              ml: "30px",
              "*": {
                textDecoration: "none",
              },
            }}
            key={i}
          >
            {hl.name === "Bills" ? (
              <>
                <Typography
                  sx={{
                    background:
                      pathname === hl.link
                        ? "linear-gradient(90deg, rgb(203,238,85) 0%, rgb(222,228,83) 100%)"
                        : "rgb(255,255,255)",
                    color: "transparent",
                    WebkitBackgroundClip: "text",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                >
                  {hl.name}
                </Typography>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openFeaturePopup}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{
                    "& .MuiPaper-root": {
                      borderRadius: "10px",
                      mt: "5px",
                      ml: "-25px",
                    },
                    "& ul": {
                      backgroundColor: "#030712",
                      border: "#666 1px solid",
                      borderRadius: "10px",
                    },
                    "& li:hover": {
                      backgroundColor: "#111827",
                      transitionProperty: "all",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "150ms",
                    },
                    "& a": {
                      textDecoration: "none !important",
                    },
                  }}
                >
                  {billList.map((bill, i) => (
                    <Box onClick={bill.onClick} key={i}>
                      <MenuItem onClick={handleClose}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              background: "rgb(255,255,255)",
                              color: "transparent",
                              WebkitBackgroundClip: "text",
                              fontSize: "15px",
                            }}
                          >
                            {bill.name}
                          </Typography>
                        </Box>
                      </MenuItem>
                    </Box>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                {
                  <Box
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={hl.onClick}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {clickedItem === hl.name ? (
                        <Box
                          sx={{
                            width: "5px",
                            height: "5px",
                            background:
                              "linear-gradient(90deg, rgb(203,238,85) 0%, rgb(222,228,83) 100%)",
                            borderRadius: "100%",
                            mr: "5px",
                          }}
                        ></Box>
                      ) : null}
                      <Typography
                        sx={{
                          background:
                            clickedItem === hl.name
                              ? "linear-gradient(90deg, rgb(203,238,85) 0%, rgb(222,228,83) 100%)"
                              : "rgb(255,255,255)",
                          color: "transparent",
                          WebkitBackgroundClip: "text",
                          fontSize: "15px",
                        }}
                      >
                        {hl.name}
                      </Typography>
                    </Box>
                  </Box>
                }
              </>
            )}
          </Box>
        ))}
      </Box>
      <Box sx={{}}>
        <Button
          variant="contained"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            px: { xs: "10px", sm: "30px" },
            borderRadius: "5px",
            backgroundColor: "#D59F4E",
            transition: "transform 0.3s ease",
            zIndex: "10000",
            "&:hover": {
              backgroundColor: "#D59F4E",
              transform: "scale(1.05)",
            },
          }}
          onClick={() => {
            router.push("/auth/sign-up");
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              color: "#333",
            }}
          >
            Sign Up
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            ml: "10px",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            px: { xs: "10px", sm: "30px" },
            borderRadius: "5px",
            backgroundColor: "#D59F4E",
            transition: "transform 0.3s ease",
            zIndex: "10000",
            "&:hover": {
              backgroundColor: "#D59F4E",
              transform: "scale(1.05)",
            },
          }}
          onClick={() => {
            router.push("/auth/sign-in");
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              color: "#333",
            }}
          >
            Sign In
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
