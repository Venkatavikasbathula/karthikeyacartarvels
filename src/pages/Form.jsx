import React, { useState } from "react";
import { User, Mail, Phone, MapPin, Map, Calendar } from "lucide-react";
import emailjs from "emailjs-com";

const FormPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    alternativePhone: "",
    source: "",
    destination: "",
    travelDate: "",
    drivingOption: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Regex patterns
  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Get today's date in YYYY-MM-DD format for the calendar min attribute
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation
    let error = "";

    if (name === "email" && value && !emailRegex.test(value)) {
      error = "Enter a valid email address";
    } else if (name === "phone" && value && !phoneRegex.test(value)) {
      error = "Enter a valid 10-digit Indian phone number";
    } else if (name === "alternativePhone" && value && !phoneRegex.test(value)) {
      error = "Enter a valid 10-digit Indian phone number";
    } else if (name === "travelDate" && value && value < today) {
      error = "Travel date cannot be in the past";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation before sending
    const newErrors = {};
    if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Please enter a valid 10-digit phone number";
    if (
      formData.alternativePhone &&
      !phoneRegex.test(formData.alternativePhone)
    )
      newErrors.alternativePhone = "Please enter a valid 10-digit phone number";
    if (!formData.travelDate || formData.travelDate < today)
      newErrors.travelDate = "Travel date must be today or in the future";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    emailjs
      .send(
        "service_a7ki7xv", // Your service ID
        "template_fadabhc", // Your template ID
        formData,
        "QP1sq9F9h7KcNd9rY" // Your public key
      )
      .then((result) => {
        console.log("Success!", result.text);
        alert("Form successfully sent!");
        setLoading(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          alternativePhone: "",
          source: "",
          destination: "",
          travelDate: "",
          drivingOption: "",
        });
        setErrors({});
      })
      .catch((error) => {
        console.error("Failed!", error.text);
        alert("Failed to send form.");
        setLoading(false);
      });
  };

  const fields = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      placeholder: "Enter your full name",
      icon: <User className="w-4 h-4 text-gray-400" />,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      icon: <Mail className="w-4 h-4 text-gray-400" />,
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "tel",
      placeholder: "Enter your phone number",
      icon: <Phone className="w-4 h-4 text-gray-400" />,
    },
    {
      label: "Alternative Number",
      name: "alternativePhone",
      type: "tel",
      placeholder: "Enter your alternative number",
      icon: <Phone className="w-4 h-4 text-gray-400" />,
    },
    {
      label: "Source",
      name: "source",
      type: "text",
      placeholder: "Starting point",
      icon: <MapPin className="w-4 h-4 text-gray-400" />,
    },
    {
      label: "Destination",
      name: "destination",
      type: "text",
      placeholder: "Destination point",
      icon: <Map className="w-4 h-4 text-gray-400" />,
    },
    {
      label: "Travel Date",
      name: "travelDate",
      type: "date",
      placeholder: "Choose a travel date",
      icon: <Calendar className="w-4 h-4 text-gray-400" />,
      min: today, // Restrict date picker to today and future
    },
    {
      label: "Driving option",
      name: "drivingOption",
      type: "select",
      options: [
        { value: "", label: "Select an option" },
        { value: "self", label: "I will drive myself" },
        { value: "driver", label: "I need a driver" },
      ],
      icon: <MapPin className="w-4 h-4 text-gray-400" />,
    },
  ];

  return (
    <section className="w-full py-16 px-6 lg:px-12">
      <div className="relative max-w-4xl mt-2 md:mt-20 mx-auto bg-white border border-slate-300 rounded-xl shadow-xl p-4 md:p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2 text-gray-800">
            Let's Connect
          </h2>
          <p className="text-gray-600">
            Fill out the form and our executive will reach out shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {fields.map(({ label, name, type, placeholder, icon, options, min }) => (
            <div key={name}>
              <label className="block text-sm mb-1">{label}</label>
              <div
                className={`flex items-center gap-2 border rounded-md px-3 py-2 transition ${
                  errors[name]
                    ? "border-red-500 focus-within:border-red-500"
                    : "border-gray-200 focus-within:border-orange-500"
                }`}
              >
                {icon}
                {type === "select" ? (
                  <select
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className="w-full text-sm focus:outline-none bg-transparent"
                  >
                    {options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                    min={min}
                    className="w-full text-sm focus:outline-none bg-transparent"
                  />
                )}
              </div>
              {errors[name] && (
                <p className="text-xs text-red-500 mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <div className="md:col-span-2 text-center">
            <button
              disabled={loading}
              type="submit"
              className="mt-4 px-5 py-3 rounded-full bg-orange-600 text-gray-50 hover:bg-orange-700 transition-all duration-300 font-semibold disabled:bg-gray-400 disabled:cursor-auto disabled:opacity-50"
            >
              {loading ? "Sending…" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormPage;
