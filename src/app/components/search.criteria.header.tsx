import { Typography, Divider, Box } from "@mui/material";
import React from "react";

type Props = { text: string };

export default function SearchCriteriaHeader({ text }: Readonly<Props>) {
  return (
    <Box sx={{ py: 1, px: 2 }}>
      <Typography variant="h6">
        {text}
        <Divider />
      </Typography>
    </Box>
  );
}
