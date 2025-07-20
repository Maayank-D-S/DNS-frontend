import { useEffect } from "react";

const EnquiryModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white rounded-md max-w-lg w-full p-8 relative animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-xl font-serif text-center text-yellow-800 mb-6">
          Request a call back
        </h2>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Name*"
            className="w-full border-b border-gray-300 outline-none py-2"
          />
          <input
            type="email"
            placeholder="E-Mail ID*"
            className="w-full border-b border-gray-300 outline-none py-2"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full border-b border-gray-300 outline-none py-2"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full border-b border-gray-300 outline-none py-2"
          />
          {/* <select className="w-full border-b border-gray-300 py-2 bg-transparent">
            <option>Select Country*</option>
            <option>India</option>
            <option>UAE</option>
            <option>USA</option>
          </select>
          <select className="w-full border-b border-gray-300 py-2 bg-transparent">
            <option>Select City*</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Bangalore</option>
          </select> */}
          <input
            type="tel"
            placeholder="Enter Mobile Number*"
            className="w-full border-b border-gray-300 outline-none py-2"
          />
          <label className="flex items-start text-sm text-gray-600 gap-2">
            <input type="checkbox" className="mt-1" />
            By checking this box, you agree to our{" "}
            <a href="#" className="text-yellow-700 underline">Privacy Policy</a>
            &nbsp;and consent to be contacted with relevant updates.
          </label>
          <button
            type="submit"
            className="bg-yellow-700 text-white py-2 px-6 rounded hover:bg-yellow-800 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
