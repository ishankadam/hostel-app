import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";

const LocationCard = ({ location }) => {
  const router = useRouter();

  const handleViewHostels = () => {
    router.push(`location/${location.id}`);
  };

  return (
    <Card
      onClick={handleViewHostels}
      sx={{
        cursor: "pointer",
        boxShadow: 3,
        "&:hover": {
          boxShadow: 6,
          transform: "scale(1.05)",
        },
        transition: "all 0.3s ease-in-out",
        borderRadius: 2,
        maxWidth: 345,
        margin: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`/${location.image}`}
        alt={location.name}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
      />
      <CardContent sx={{ paddingBottom: 2 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            fontSize: "1.25rem",
          }}
        >
          {location.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "1rem",
            lineHeight: 1.5,
          }}
        >
          Hostels available: {location.hostelCount}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
