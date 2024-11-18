import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { CircularProgress, Grid, Typography, Box } from "@mui/material";
import HostelCard from "../../components/HostelCard";
import { GET_HOSTELS_BY_LOCATION } from "../../graphql/queries";

const LocationPage = () => {
  const router = useRouter();
  const { location } = router.query;

  const { loading, error, data } = useQuery(GET_HOSTELS_BY_LOCATION, {
    variables: { locationId: location },
    skip: !location,
    fetchPolicy: "cache-first",
  });

  if (loading) return <CircularProgress />;

  if (error) return <p>Error: {error.message}</p>;

  if (!data?.hostels?.hostels?.length) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          No hostels available in {location}.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          marginTop: { xs: "2px", sm: "7px", md: "12px" },
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          fontWeight: "bold",
        }}
      >
        Hostels in {data.hostels.locationName}
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          padding: { xs: "10px", sm: "20px", md: "30px" },
        }}
      >
        {data.hostels.hostels.map((hostel) => (
          <Grid item xs={12} sm={6} md={3} key={hostel.id}>
            <HostelCard hostel={hostel} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LocationPage;
