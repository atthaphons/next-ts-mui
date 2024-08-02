"use client";
import { setScreenId } from "@/app/store/slices/screen.slice";
import { useAppDispatch } from "@/app/store/store";
import { useEffect, useState } from "react";
import SearchMaintainDetail from "./search.maintain.detail";
import SearchCriteriaSection from "@/app/components/search.criteria.section";
import SearchCriteriaDetails from "./search.criteria.detail";
import {
  SearchCriteria,
  SearchCriteriaForm,
  SearchResult,
} from "@/interface/supplier";
import { initTextBoxForm } from "@/data/common";
import { MODE } from "@/app/utils/constants";
import { useTranslation } from "react-i18next";
import axios from "axios";
import BoxLoading from "@/app/components/box.loading";
import SearchResultSection from "@/app/components/search.result.section";
import SearchMaintainSection from "@/app/components/search.maintain.section";
import { GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
export default function SupplierPage() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(setScreenId({ screenCode: "T0002", screenName: "SC0002" }));
  }, [dispatch]);

  function doSearch() {
    if (errorMessage.length > 0) {
      return;
    } else {
      setMode(MODE.SEARCH);
      const callApi = async () => {
        setResultLoading(true);
        const searchWith: SearchCriteria = {
          supplierCode: criteria.supplierCode.value,
          supplierName: criteria.supplierName.value,
        };
        const res = await axios.post("/api/supplier", searchWith);
        const result = (await res.data) as SearchResult[];
        setDataResults(result);
        setResultLoading(false);
      };
      callApi();
    }
  }
  function doClear() {
    setMode(MODE.INITIAL);
    setCriteria({
      supplierCode: initTextBoxForm,
      supplierName: initTextBoxForm,
    });
  }

  function doAdd() {
    console.log("do add");
  }
  const doEdit = (supCd: string) => {
    console.log("do edit ", supCd);
  };
  function getRowId(row: SearchResult) {
    return row.supplierCode;
  }

  const [criteria, setCriteria] = useState<SearchCriteriaForm>({
    supplierCode: initTextBoxForm,
    supplierName: initTextBoxForm,
  });
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [mode, setMode] = useState<string>(MODE.INITIAL);
  const [resultLoading, setResultLoading] = useState<boolean>(false);
  const [dataResults, setDataResults] = useState<any>();
  const columns: GridColDef[] = [
    {
      field: "supplierCode",
      headerName: "Supplier Code",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const supplierCode = params.value;
        return (
          <Button variant="text" onClick={() => doEdit(supplierCode)}>
            {supplierCode}
          </Button>
        );
      },
    },
    {
      field: "supplierName",
      headerName: "Supplier Name",
      minWidth: 150,
      headerAlign: "center",
      align: "left",
    },
  ];
  return (
    <>
      {mode === MODE.INITIAL || mode === MODE.SEARCH ? (
        <>
          <SearchCriteriaSection
            textHeader={t("searchCriteria")}
            layoutDetails={
              <SearchCriteriaDetails
                criteria={criteria}
                setCriteria={setCriteria}
                setErrorMessage={setErrorMessage}
              />
            }
            errorMessage={errorMessage}
            actionSearch={doSearch}
            actionClear={doClear}
          />
          <SearchMaintainSection
            layoutDetails={<SearchMaintainDetail actionAdd={doAdd} />}
          />
        </>
      ) : (
        <></>
      )}
      {mode === MODE.SEARCH ? (
        <>
          {resultLoading ? (
            <BoxLoading />
          ) : (
            <SearchResultSection
              headerColums={columns}
              dataRows={dataResults}
              getRowId={getRowId}
            />
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
