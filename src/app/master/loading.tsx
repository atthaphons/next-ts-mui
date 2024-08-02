'use client'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useState } from "react";
import { userSelector } from "@/app/store/slices/member.slice";


export default function Loading() {
  const usersReducer = useSelector(userSelector);
  const [loading, setLoading] = useState(usersReducer.loading);
  console.log("loading === > ", loading)

  return ({ loading } &&
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        background: "#0FFF"
      }}
    >
      <CircularProgress />
    </Box>
  );
};
