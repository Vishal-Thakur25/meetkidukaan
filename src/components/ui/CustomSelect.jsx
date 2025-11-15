"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomSelect({
  label,
  options,
  placeholder,
  value,
  onChange,
  error,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <label className="block font-medium mb-1">{label}</label>

      <div
        onClick={() => setOpen(!open)}
        className={`w-full p-3 rounded-xl border flex justify-between items-center cursor-pointer bg-white/70 backdrop-blur-md shadow-sm 
          ${error ? "border-red-500" : "border-gray-300"}`}
      >
        <span className={`${value ? "text-black" : "text-gray-400"}`}>
          {value || placeholder}
        </span>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      {open && (
        <div className="absolute left-0 top-full w-full bg-white border border-gray-300 rounded-xl mt-1 shadow-md max-h-40 overflow-y-auto z-50">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => {
                onChange(option.name);
                setOpen(false);
              }}
              className="p-3 hover:bg-gray-100 cursor-pointer font-medium text-gray-700"
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
