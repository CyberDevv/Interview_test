"use client";

import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  MenuItem,
  Select as MUISelect,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';

type SelectProps = {
  options: string[];
  label?: string;
  icon?: React.ReactNode;
  isErrorMessage?: string;
  hasDefaulttValue?: boolean | string;
  value?: string;
  onChange?: any;
  onRemoveClick?: any
};

const Select = ({ options, label, icon, isErrorMessage, hasDefaulttValue, onRemoveClick, value, onChange }: SelectProps) => {
  const [svalue, setvalue] = React.useState<string>(hasDefaulttValue ? options[0] : '');

  // React.useEffect(() => {
  //   setState(hasDefaulttValue ? options[0] : '')
  // }, [hasDefaulttValue, options, setState])
  
  const handleChange = (event: SelectChangeEvent) => {
    setvalue(event.target.value as string);
  };
  return (
    <div>
      {label && <label className= "text-sm md:text-base">{label}</label>}

      <FormControl fullWidth sx={{ marginTop: "4px" }} error= {isErrorMessage ? true : false}>
        <MUISelect
          startAdornment={
            icon && (
              <InputAdornment position="start">
                <IconButton onClick= {onRemoveClick}>
                  <DoNotDisturbOnOutlinedIcon className= "text-red-500" />
                </IconButton>
              </InputAdornment>
            )
          }
          value={value || svalue}
          onChange={value ? onChange : handleChange}
          displayEmpty
        >
          {options?.map((value, idx) => (
            <MenuItem key={idx} value={value}>
              {value}
            </MenuItem>
          ))}
        </MUISelect>
        {isErrorMessage && <FormHelperText>{isErrorMessage}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default Select;
