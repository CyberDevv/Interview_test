"use client";

import React from "react";
import Select from "./Select";
import TextBox from "./TextBox";
import { Button, FormHelperText, SelectChangeEvent } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import dayjs, { Dayjs } from "dayjs";

const PersonalForm = () => {
  const [number, setNumber] = React.useState(Array(2).fill(""));
  const [gender, setGender] = React.useState<string>('')
  const [genderError, setGenderError] = React.useState('')
  const [insurance, setinsurance] = React.useState<string>('')
  const [insuranceError, setinsuranceError] = React.useState('')
  const [date, setDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const [removeIndex, setRemoveIndex] = React.useState(-1);


  const handleAddTextbox = () => {
    setNumber([...number, ""]);
  };

  const handleRemoveTextbox = (idx: number) => {
    setNumber(number.splice(idx, 1))
  };

  const handleSubmit = (event: any) => {
    event.preventDefault()

    !gender ? setGenderError('Please select a gender') : setGenderError('')
    !insurance ? setinsuranceError('Please select an insurance') : setinsuranceError('')
  }

  const handleOnchange = (arg: string, event: any) => {
    if (arg === 'gender') {
        setGender(event.target.value as string);
    } else if (arg === 'insurance'){
        setinsurance(event.target.value as string);
    }
    
  }
  
  return (
    <div className="md::w-8/12 h-full md:px-10 block py-14 md:py-20">
      <h4 className="text-lg md:text-xl xl:text-2xl font-bold tracking-wide">Personal Info</h4>

      <form className="mt-4 lg:mt-6 space-y-4 lg:space-y-8" onSubmit={handleSubmit}>
        <Select value= {gender} onChange={(e: any) => handleOnchange('gender', e)} label="Provide your gender" options={["Male", "Female"]} isErrorMessage={genderError} />

        <div className="space-y-2">
          <label className= "text-sm md:text-base">Phone number</label>
          {number.map((textbox, idx) => {
            return (
              <div key={idx}>
                <div className="start w-full">
                  <Select  onRemoveClick={() => handleRemoveTextbox(idx)} icon options={["Mobile", "Work"]} hasDefaulttValue="Mobile" />
                  <TextBox options={["234", "224"]} />
                </div>
              </div>
            );
          })}

          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleAddTextbox}
            sx={{
              color: "black",
              textTransform: "none",
              border: "1px solid gray !important",
            }}
          >
            Add phone number
          </Button>
        </div>

        <div className="space-y-2">
          <label className= "text-sm md:text-base block">Date of birth</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="w-full" value={date} onChange={(newValue) => setDate(newValue)}/>
          </LocalizationProvider>
        </div>

        <Select label="Insurance" value= {insurance} options={["Insurance 1", "Insurance 2"]} onChange={(e: any) => handleOnchange('insurance', e)} isErrorMessage={insuranceError}/>
      <Button
        className="mt-10 float-right bg-teal-600 hvoer:bg-teal-700 normal-case"
        variant="contained"
        type= "submit"
      >
        Next
      </Button>
      </form>

    </div>
  );
};

export default PersonalForm;
