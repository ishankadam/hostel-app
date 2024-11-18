import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, Box } from "@mui/material";
import HostelCard from "../components/HostelCard";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          No items in the cart
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {cartItems.map((hostel) => (
            <Grid item key={hostel.id} xs={12} sm={6} md={3}>
              <HostelCard hostel={hostel} removeButton={true} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CartPage;
