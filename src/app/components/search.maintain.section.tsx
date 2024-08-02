import { Box, Stack } from "@mui/material";

type Props = { layoutDetails: React.ReactNode };

export default function SearchMaintainSection({
  layoutDetails,
}: Readonly<Props>) {
  return (
    <Box sx={{ py: 1, px: 2, display: "flex", justifyContent: "flex-end" }}>
      <Stack direction="row" spacing={2}>
        {layoutDetails}
      </Stack>
    </Box>
  );
}
