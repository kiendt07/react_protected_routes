import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import jobs from "../jobs.json";

function DetailPage() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);

  if (!job) {
    return (
      <Typography variant="h3" marginTop={3}>
        Not found
      </Typography>
    );
  }
  return (
    // <div>DetailPage {params.id}</div>
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" marginTop={3}>
        {job.title}
      </Typography>

      <Box marginTop={3} sx={{ display: "flex" }}>
        {/* <img src = {job.imageLink} alt = "" /> */}
      </Box>
    </Container>
  );
}

export default DetailPage;
