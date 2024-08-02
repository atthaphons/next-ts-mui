import { Box, Alert } from "@mui/material";
import React from "react";

type Props = { errorMessage: string[] };

export default function BoxAlertError({ errorMessage }: Readonly<Props>) {
  const haveAnyError = errorMessage.length > 0;

  const component = haveAnyError ? (
    <Box sx={{ py: 1 }}>
      {errorMessage.map((error, index) => (
        <Alert key={index} severity="error">
          {error}
        </Alert>
      ))}
    </Box>
  ) : (
    <></>
  );
  return <>{component}</>;
}
