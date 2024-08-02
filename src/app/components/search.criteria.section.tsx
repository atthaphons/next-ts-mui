import { Paper, Box } from "@mui/material";
import React from "react";
import SearchCriteriaButton from "./search.criteria.button";
import SearchCriteriaHeader from "./search.criteria.header";
import SearchCriteriaDetails from "./search.criteria.detail";

type Props = {
  textHeader: string;
  layoutDetails: React.ReactNode;
  errorMessage: string[];
  actionSearch: () => void;
  actionClear: () => void;
};

export default function SearchCriteriaSection({
  textHeader,
  layoutDetails,
  errorMessage,
  actionSearch,
  actionClear,
}: Readonly<Props>) {
  return (
    <Paper elevation={3} sx={{ m: "1%" }}>
      <Box>
        <SearchCriteriaHeader text={textHeader} />
        <SearchCriteriaDetails
          layoutDetails={layoutDetails}
          errorMessage={errorMessage}
        />
        <SearchCriteriaButton
          actionSearch={actionSearch}
          actionClear={actionClear}
        />
      </Box>
    </Paper>
  );
}
