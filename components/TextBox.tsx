"use client";

import {
  InputAdornment,
  TextField,
  FormControl,
  MenuItem,
  Select as MUISelect,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

type TextProps = {
  options?: string[];
  isErrorMessage?: string;
};

type SelectProps = {
  options: string[];
};

const TextBox = ({ options, isErrorMessage }: TextProps) => {
  const Select = ({ options }: SelectProps) => {
    const [value, setvalue] = React.useState<string>(options[0]);

    const handleChange = (event: any) => {
      setvalue(event.target.value as string);
    };
    return (
      <div>
        <select value={value} onChange={handleChange}>
          {options?.map((value, idx) => (
            <option key={idx} value={value}>
              +{value}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <TextField
      sx={{ marginLeft: 1, marginTop: "4px" }}
      fullWidth
      error= {isErrorMessage ? true : false}
      helperText={isErrorMessage ? isErrorMessage : ''}
      required
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Select options={options || []} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default TextBox;
