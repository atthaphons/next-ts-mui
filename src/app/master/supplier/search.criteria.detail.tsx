import { validateLimitLenth } from "@/app/utils/valudate.screen";
import { SearchCriteriaForm } from "@/interface/supplier";
import { Grid, TextField } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect } from "react";

type Props = {
  criteria: SearchCriteriaForm;
  setCriteria: Dispatch<SetStateAction<SearchCriteriaForm>>;
  setErrorMessage: Dispatch<SetStateAction<string[]>>;
};
type validateFuntion = (a: string) => string[];
export default function SearchCriteriaDetails({
  criteria,
  setCriteria,
  setErrorMessage,
}: Readonly<Props>) {
  function handleSupCode(valueAction: string) {
    handleField("supplierCode", valueAction, validateSupCode);
  }
  function handleSupName(valueAction: string) {
    handleField("supplierName", valueAction, validateSupName);
  }
  function handleField(
    fieldKey: string,
    fieldValue: string,
    funcValidation: validateFuntion
  ) {
    const msgFromValidation = funcValidation(fieldValue);
    const haveAnyError = msgFromValidation.length > 0;

    setCriteria((criteria) => ({
      ...criteria,
      [fieldKey]: {
        value: fieldValue,
        isError: haveAnyError,
        errorMessage: msgFromValidation,
      },
    }));
  }
  function validateSupCode(value: string) {
    const errors: string[] = [];
    const errorMsg = validateLimitLenth("Suplier Code", 4, value);

    if (errorMsg.length > 0) {
      errors.push(errorMsg);
    }
    return errors;
  }
  function validateSupName(value: string) {
    const errors: string[] = [];
    const errorMsg = validateLimitLenth("Suplier Name", 50, value);

    if (errorMsg.length > 0) {
      errors.push(errorMsg);
    }
    return errors;
  }

  useEffect(() => {
    const buildErrorMessage = () => {
      const errorMsg: string[] = [];
      for (const [fieldKey] of Object.entries(criteria)) {
        const error = criteria[fieldKey].errorMessage;
        if (error && error.length > 0) {
          errorMsg.push(...error);
        }
      }

      setErrorMessage(errorMsg);
    };
    buildErrorMessage();
  }, [criteria, setErrorMessage]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          label="Supplier Code"
          placeholder="Suffix Wildcard *"
          error={criteria.supplierCode.isError}
          value={criteria.supplierCode.value}
          onChange={(e) => handleSupCode(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          multiline
          size="small"
          variant="outlined"
          label="Supplier Name"
          placeholder="Suffix Wildcard *"
          error={criteria.supplierName.isError}
          value={criteria.supplierName.value}
          onChange={(e) => handleSupName(e.target.value)}
        />
      </Grid>
      <Grid item xs={6} />
    </Grid>
  );
}
