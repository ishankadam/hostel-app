import React from "react";
import { useQuery } from "@apollo/client";
import { Grid, CircularProgress, Button, Typography } from "@mui/material";
import LocationCard from "../components/LocationCard";
import { GET_LOCATIONS } from "../graphql/queries";
import { useRouter } from "next/router";

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  const router = useRouter();
  if (loading)
    return (
      <CircularProgress
        sx={{ display: "block", margin: "auto", marginTop: "20px" }}
      />
    );
  if (error) return <p>Error: {error.message}</p>;

  const handleNavigateToHostelCount = () => {
    router.push({
      pathname: "/hostelCount",
      query: {
        data: JSON.stringify({ location: data.locations }),
      },
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginTop: { xs: "2px", sm: "7px", md: "12px" },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            fontWeight: "bold",
          }}
        >
          Locations
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNavigateToHostelCount}
          size="medium"
          sx={{
            marginTop: { xs: "10px", sm: "0" },
            width: { xs: "100%", sm: "auto" },
            maxWidth: "250px",
          }}
        >
          Go to Hostel Count Page
        </Button>
      </div>

      <Grid container spacing={3} padding={3}>
        {data.locations.map((location) => (
          <Grid item xs={12} sm={6} md={3} key={location.id}>
            <LocationCard location={location} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
