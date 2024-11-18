import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/cartSlice";

const HostelCard = ({ hostel, removeButton }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const isInCart = !removeButton && cart.some((item) => item.id === hostel.id);

  const handleAddToCart = (hostel) => {
    dispatch(addToCart(hostel));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={`/${hostel.image}`}
        alt={hostel.name}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {hostel.name}
        </Typography>
      </CardContent>

      <Button
        variant="contained"
        color={removeButton ? "secondary" : "primary"}
        onClick={() =>
          removeButton
            ? handleRemoveFromCart(hostel.id)
            : handleAddToCart(hostel)
        }
        sx={{
          margin: 2,
          width: "90%",
          alignSelf: "center",
          textTransform: "none",
          borderRadius: 1,
          boxShadow: 2,
          "&:hover": {
            boxShadow: 4,
          },
        }}
        disabled={removeButton ? false : isInCart}
      >
        {removeButton
          ? "Remove from Cart"
          : isInCart
          ? "Added to Cart"
          : "Add to Cart"}
      </Button>
    </Card>
  );
};

export default HostelCard;
