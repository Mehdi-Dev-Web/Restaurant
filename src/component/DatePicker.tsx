import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import React, { useState } from "react";
import dayjs from "dayjs";
type PropType = {
  setDate: (selectedDate: string | null) => void
}
function DatePicker({ setDate }: PropType ) {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const shouldDisableTime = (value, view) => {
    const hour = value.hour();
    if (view === "hours") {
      return !(hour >= 16 || hour < 3); // Allow 16:00 (4 PM) to 2:59 AM
    }
    return false;
  };
  // console.log(typeof(selectedDate.toISOString()))
  return (

<div className="md:min-w-[277px]">
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateTimePicker
            value={selectedDate}
            onAccept={(newValue) => {
              if (newValue && (newValue.hour() >= 16 || newValue.hour() < 3)) {
                setSelectedDate(newValue);
                setDate(selectedDate.toISOString())
              }
            }}
            minDateTime={dayjs().hour(16).minute(0)} 
            shouldDisableTime={shouldDisableTime}
      slotProps={{
        textField: {
          sx: {
            "& .MuiOutlinedInput-root": {
              border: "2px solid yellow",
              borderRadius: 0,
              "&:hover": {
                borderBottom: "2px solid gold",
              },
              "&.Mui-focused": {
                borderBottom: "2px solid orange",
              },
            },
            "& .MuiInputBase-input": {
              color: "yellow",
            },
            "& .MuiInputLabel-root": {
              color: "yellow",
            },
            "& .MuiIconButton-root": {
              color: "white", 
            },
            "& .MuiSvgIcon-root": {
              color: "white !important",
            },
          },
        },
      }}
    />
  </LocalizationProvider>
</div>

  );
}

export default React.memo(DatePicker);
