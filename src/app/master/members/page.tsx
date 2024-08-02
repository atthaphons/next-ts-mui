"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button, Container, Paper, TableContainer } from "@mui/material";
import { useAppDispatch } from "@/app/store/store";
import { setScreenId } from "@/app/store/slices/screen.slice";
import ResultTable from "./result";


const MaterialPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname()

  useEffect(() => {
    dispatch(setScreenId({ screenCode: "T0001", screenName: "SC0001" }))
  }, [dispatch]);

  return (
    <Container sx={{ p: 4 }}>

      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push(`${pathname}/create`)}
      >
        Add
      </Button>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <ResultTable />
      </TableContainer>
    </Container>
  );
};

export default MaterialPage
