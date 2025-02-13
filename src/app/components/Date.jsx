"use client"
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const DateDropdown = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex flex-col place-self-start text-darkblue">
      <label htmlFor="datepicker">Select a Date</label>
      <div className="border flex items-baseline rounded-10">
      <FaCalendarAlt className="m-2"/>
      <DatePicker className="selected={bg-darkblue}" id="datepicker" closeOnScroll={true} selected={startDate} onChange={(date) => setStartDate(date)} dateFormat={'dd-MM-yyyy'}
          calendarClassName="bg-darkblue"/>
      </div></div>
  );
};

export default DateDropdown;