"use client"
import { Box, Stack, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSession } from "next-auth/react";

type Props = { actionSearch: () => void; actionClear: () => void };

export default function SearchCriteriaButton({
  actionSearch,
  actionClear,
}: Readonly<Props>) {


  const { t } = useTranslation();
  const { data: session, status } = useSession();

  console.log(status)
  console.log(t)
  return (
    <Box sx={{ pt: 1, px: 2, pb: 3 }}>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          color="primary"
          onClick={actionSearch}
        >
          {t('searchButton')}
        </Button>
        <Button
          variant="contained"
          startIcon={<ClearAllIcon />}
          color="inherit"
          onClick={actionClear}
        >
          {t('clearButton')}

        </Button>
      </Stack>
    </Box>
  );
}
