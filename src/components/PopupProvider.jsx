"use client";

import { createContext, useContext, useState } from "react";
import { Bai_Jamjuree } from "next/font/google";
import CustomSelect from "./ui/CustomSelect";
import MeetingDatePicker from "./ui/MeetingDatePicker";
import { toast } from "react-toastify";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const PopupContext = createContext();
export const usePopup = () => useContext(PopupContext);

export default function PopupProvider({ children }) {
  const [open, setOpen] = useState(false);

  // OPEN / CLOSE POPUP
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  // FORM DATA
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    state: "",
    investment: "",
    meetingDate: null,
    meetingTime: "",
  });

  // ERROR MESSAGES
  const [errors, setErrors] = useState({});

  // SUBMIT FORM WITH BACKEND API INTEGRATION
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.state) newErrors.state = "Please select state";
    if (!formData.investment)
      newErrors.investment = "Please select investment amount";
    if (!formData.meetingDate)
      newErrors.meetingDate = "Please select meeting date";
    if (!formData.meetingTime)
      newErrors.meetingTime = "Please select meeting time";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const token = localStorage.getItem("admin_token"); // get token from login

      // SEND DATA TO API
      const res = await fetch("/api/admin/meetings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // <--- add this
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          state: formData.state,
          investment: formData.investment,
          meetingDate:
            typeof formData.meetingDate === "string"
              ? formData.meetingDate
              : formData.meetingDate?.toISOString(),
          meetingTime: formData.meetingTime,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        alert(data.error || "Something went wrong! Please try again.");
        return;
      }

      // SUCCESS
      toast.success(
        "Thank you! Your meeting has been booked. Our team will contact you soon."
      );
      closePopup();

      // RESET FORM
      setFormData({
        fullName: "",
        phone: "",
        state: "",
        investment: "",
        meetingDate: null,
        meetingTime: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Server error! Please try again later.", "error");
    }
  };
  // STATES LIST
  const states = [
    { id: "1", name: "Andhra Pradesh" },
    { id: "2", name: "Arunachal Pradesh" },
    { id: "3", name: "Assam" },
    { id: "4", name: "Bihar" },
    { id: "5", name: "Chhattisgarh" },
    { id: "6", name: "Goa" },
    { id: "7", name: "Gujarat" },
    { id: "8", name: "Haryana" },
    { id: "9", name: "Himachal Pradesh" },
    { id: "10", name: "Jharkhand" },
    { id: "11", name: "Karnataka" },
    { id: "12", name: "Kerala" },
    { id: "13", name: "Madhya Pradesh" },
    { id: "14", name: "Maharashtra" },
    { id: "15", name: "Manipur" },
    { id: "16", name: "Meghalaya" },
    { id: "17", name: "Mizoram" },
    { id: "18", name: "Nagaland" },
    { id: "19", name: "Odisha" },
    { id: "20", name: "Punjab" },
    { id: "21", name: "Rajasthan" },
    { id: "22", name: "Sikkim" },
    { id: "23", name: "Tamil Nadu" },
    { id: "24", name: "Telangana" },
    { id: "25", name: "Tripura" },
    { id: "26", name: "Uttar Pradesh" },
    { id: "27", name: "Uttarakhand" },
    { id: "28", name: "West Bengal" },
  ];

  // INVESTMENT RANGE
  const price = [
    { id: "1", name: "Below ₹50,000" },
    { id: "2", name: "₹50,000 - ₹1,00,000" },
    { id: "3", name: "₹1,00,000 - ₹5,00,000" },
    { id: "4", name: "Above ₹5,00,000" },
  ];

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}

      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 w-full max-w-[500px] shadow-xl border border-gray-200 relative animate-fadeUp">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            <h2
              className={`text-2xl font-extrabold mb-4 text-center bg-gradient-to-r from-amber-600 to-orange-600 text-transparent bg-clip-text ${baiJamjuree.className}`}
            >
              BOOK YOUR MEETING WITH US
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block font-medium">Full Name*</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`w-full p-3 rounded-xl border outline-none ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block font-medium">Mobile No.*</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className={`w-full p-3 rounded-xl border outline-none ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <CustomSelect
                label="State*"
                placeholder="Select State"
                options={states}
                value={formData.state}
                onChange={(value) => setFormData({ ...formData, state: value })}
                error={errors.state}
              />

              <CustomSelect
                label="Investment Amount*"
                placeholder="Select Investment"
                options={price}
                value={formData.investment}
                onChange={(value) =>
                  setFormData({ ...formData, investment: value })
                }
                error={errors.investment}
              />

              <MeetingDatePicker
                value={formData.meetingDate}
                onChange={(date) =>
                  setFormData({ ...formData, meetingDate: date })
                }
                error={errors.meetingDate}
              />

              <CustomSelect
                label="Meeting Time*"
                placeholder="Select Meeting Time"
                options={[
                  { id: 1, name: "9:00 AM - 11:00 AM" },
                  { id: 2, name: "11:00 AM - 1:00 PM" },
                  { id: 3, name: "1:00 PM - 3:00 PM" },
                  { id: 4, name: "3:00 PM - 5:00 PM" },
                  { id: 5, name: "5:00 PM - 7:00 PM" },
                ]}
                value={formData.meetingTime}
                onChange={(value) =>
                  setFormData({ ...formData, meetingTime: value })
                }
                error={errors.meetingTime}
              />

              <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition">
                Submit
              </button>
            </form>
          </div>

          <style jsx>{`
            .animate-fadeUp {
              animation: fadeUp 0.35s ease-out;
            }
            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </PopupContext.Provider>
  );
}
