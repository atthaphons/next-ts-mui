import * as React from "react";
import { DataGrid, GridColDef, GridRowIdGetter } from "@mui/x-data-grid";
import { Paper, Box } from "@mui/material";

type Props = {
  headerColums: GridColDef[];
  dataRows: any[];
  getRowId: GridRowIdGetter<any>;
};
export default function SearchResultSection({
  headerColums,
  dataRows,
  getRowId,
}: Readonly<Props>) {
  return (
    <Paper elevation={3} sx={{ m: "1%" }}>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          columns={headerColums}
          rows={dataRows}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          getRowId={getRowId}
          getRowHeight={() => "auto"}
          sx={{
            "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
              borderRight: `1px solid #f0f0f0`,
            },
            // "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
            //   borderBottom: `1px solid #f0f0f0`,
            // },
          }}
        />
      </Box>
    </Paper>
  );
}
