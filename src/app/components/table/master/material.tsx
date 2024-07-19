'use client';

import MUIDataTable from "mui-datatables";
import { MaterialMasterSearchResult } from "@/app/types";


interface TableProps {
  resultsdata: MaterialMasterSearchResult[];
}

const TableMaterial: React.FC<TableProps> = ({ resultsdata }) => {
  if (resultsdata == null) {
    resultsdata = [];
  }

  console.log("resultsdata => ", resultsdata)

  const columns = [
    {
      name: "id",
      label: "MATERIAL ID",

    },
    {
      name: "matCd",
      label: "MATERIAL CODE",

    },
    {
      name: "matName",
      label: "MATERIAL NAME",

    },
    {
      name: "cmpyCd",
      label: "COMPANY",

    }
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: ""
  };
  return (
    <MUIDataTable
      title={"Search Result"}
      data={resultsdata}
      columns={columns}
      options={options}
    />
  );
};

export default TableMaterial;
