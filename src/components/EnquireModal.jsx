import { useState, useEffect } from "react";

const EnquiryModal = ({ isOpen, onClose }) => {
  // form state
  const path = import.meta.env.VITE_API_BASE;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [agree, setAgree] = useState(false);

  // prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Required‑field validation
    if (!name.trim() || !email.trim() || !mobile.trim()) {
      alert("Please fill all required fields");
      return;
    }

    const payload = { name, email, country, city, mobile };

    try {
      const res = await fetch(`${path}/customers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok) {
        alert("Thank you for filling the form");
        // reset form
        setName("");
        setEmail("");
        setCountry("");
        setCity("");
        setMobile("");
        setAgree(false);
        onClose();
      } else {
        alert(data.error || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      alert("An unexpected error occurred");
    }
  };

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

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name*"
            className="w-full border-b border-gray-300 outline-none py-2"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E‑Mail ID*"
            className="w-full border-b border-gray-300 outline-none py-2"
          />

          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            placeholder="Country"
            className="w-full border-b border-gray-300 outline-none py-2"
          />

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="City"
            className="w-full border-b border-gray-300 outline-none py-2"
          />

          <input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type="tel"
            placeholder="Enter Mobile Number*"
            className="w-full border-b border-gray-300 outline-none py-2"
          />

<label className="flex items-start gap-2 text-sm text-gray-600">
  <input
    type="checkbox"
    checked={agree}
    onChange={e => setAgree(e.target.checked)}
    className="mt-1"
  />
  <span className="leading-relaxed">
    By checking this box, you agree to our{" "}
    <a href="#" className="text-yellow-700 underline">
      Privacy Policy
    </a>{" "}
    and consent to be contacted with relevant updates.
  </span>
</label>

          <button
            type="submit"
            disabled={!agree}
            className="bg-yellow-700 text-white py-2 px-6 rounded w-full 
                      hover:bg-yellow-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
