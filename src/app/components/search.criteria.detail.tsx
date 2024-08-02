import BoxAlertError from "@/app/components/box.alert.error";
import { Box } from "@mui/material";
import React from "react";

type Props = { layoutDetails: React.ReactNode; errorMessage: string[] };

export default function SearchCriteriaDetails({
  layoutDetails,
  errorMessage,
}: Readonly<Props>) {
  return (
    <Box sx={{ py: 1, px: 2 }}>
      {layoutDetails}
      <BoxAlertError errorMessage={errorMessage} />
    </Box>
  );
}
