import { TextField } from "@mui/material";
import { useState } from "react";

export const ValidatedTextField = ({ label, validator, onChange }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (e: { target: { value: any; }; }) => {
    const newValue = e.target.value;
    const errorMessage = validator(newValue);
    setValue(newValue);
    setError(errorMessage);
    onChange(!errorMessage);
  };
  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
    />
  );
};