import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const CustomAppBar = () => {
  const cartCount = useSelector((state) => state.cart.items.length);
  const router = useRouter();

  const handleCartClick = () => {
    router.push("/cart");
  };

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          Hostel App
        </Typography>
        <IconButton
          color="inherit"
          aria-label="cart"
          onClick={handleCartClick}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: { xs: "2rem", sm: "2.5rem" } }}
            />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
