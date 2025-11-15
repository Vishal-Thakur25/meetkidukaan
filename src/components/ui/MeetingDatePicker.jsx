"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/app/styles/datepicker.css";
import { Calendar } from "lucide-react";

export default function MeetingDatePicker({ value, onChange, error }) {
  const [date, setDate] = useState(null);

  return (
    <div className="w-full">
      <label className="block font-medium mb-2">Meeting Date*</label>

      <div className="relative">
        <DatePicker
          selected={value}
          onChange={(date) => onChange(date)}
          placeholderText="Select Meeting Date"
          minDate={new Date()}
          /* 👇 CHANGE WIDTH HERE 👇 */
          className="w-[420px] p-3 pl-12 rounded-xl border border-gray-300 
          focus:ring-2 focus:ring-amber-500 outline-none cursor-pointer 
          bg-white/70 shadow-sm backdrop-blur-md"
          popperClassName="z-[999999]"
        />

        <Calendar className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
}
