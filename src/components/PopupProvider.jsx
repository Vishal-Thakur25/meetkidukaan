"use client";

import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export default function PopupProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative animate-fadeUp">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              />
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              ></textarea>
              <button className="w-full bg-amber-600 text-white py-3 rounded-lg">
                Submit
              </button>
            </form>
          </div>

          {/* Animation */}
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
