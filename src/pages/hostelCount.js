import React from "react";
import { useRouter } from "next/router";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
  Button,
} from "@mui/material";

const HostelCountPage = () => {
  const router = useRouter();
  const { query } = router;

  const data = query.data ? JSON.parse(query.data) : null;

  if (!data) {
    return (
      <CircularProgress
        sx={{ display: "block", margin: "auto", marginTop: "20px" }}
      />
    );
  }

  const handleGoToHomePage = () => {
    router.push("/");
  };

  return (
    <Grid container spacing={3} padding={3}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Hostel Count by Location
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Location Name</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Hostel Count
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.location.map((location) => (
              <TableRow key={location.id}>
                <TableCell component="th" scope="row">
                  {location.name}
                </TableCell>
                <TableCell align="right">{location.hostelCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* "Go to Homepage" Button aligned to the left */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoToHomePage}
        >
          Go to Homepage
        </Button>
      </Box>
    </Grid>
  );
};

export default HostelCountPage;
