import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationSize({ page, handleChange, pageCount }) {
  return (
    <Stack spacing={2}>
      <Pagination
        page={page}
        onChange={handleChange}
        sx={{ ".MuiPagination-ul": { justifyContent: `center` } }}
        count={pageCount}
      />
    </Stack>
  );
}
