"use client";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    console.log("Contact Form:", formData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast("Message sent successfully!");

    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setIsSubmitting(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input with Floating Label */}
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          // The `peer` class is what enables the floating label effect
          className="peer w-full h-14 p-4 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[var(--sara-red)] focus:ring-1 focus:ring-[var(--sara-red)] transition-all duration-300"
          aria-label="Name"
          placeholder=" "
        />
        <label
          htmlFor="name"
          // This label is styled to float using `peer-placeholder-shown` and `peer-focus`
          className="absolute top-4 left-4 text-gray-500 text-sm pointer-events-none transition-all duration-300 transform 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                     peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:left-3 
                     peer-focus:text-[var(--sara-red)] bg-white px-1"
        >
          Name
        </label>
        {errors.name && (
          <p className="text-[var(--sara-red)] text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email Input with Floating Label */}
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="peer w-full h-14 p-4 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[var(--sara-red)] focus:ring-1 focus:ring-[var(--sara-red)] transition-all duration-300"
          aria-label="Email"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute top-4 left-4 text-gray-500 text-sm pointer-events-none transition-all duration-300 transform 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                     peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:left-3 
                     peer-focus:text-[var(--sara-red)] bg-white px-1"
        >
          Email
        </label>
        {errors.email && (
          <p className="text-[var(--sara-red)] text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone Input with Floating Label */}
      <div className="relative">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="peer w-full h-14 p-4 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[var(--sara-red)] focus:ring-1 focus:ring-[var(--sara-red)] transition-all duration-300"
          aria-label="Phone"
          placeholder=" "
        />
        <label
          htmlFor="phone"
          className="absolute top-4 left-4 text-gray-500 text-sm pointer-events-none transition-all duration-300 transform 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                     peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:left-3 
                     peer-focus:text-[var(--sara-red)] bg-white px-1"
        >
          Phone
        </label>
        {errors.phone && (
          <p className="text-[var(--sara-red)] text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Message Textarea with Floating Label */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="peer w-full h-32 p-4 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[var(--sara-red)] focus:ring-1 focus:ring-[var(--sara-red)] transition-colors duration-300 resize-none"
          rows={4}
          aria-label="Message"
          placeholder=" "
        />
        <label
          htmlFor="message"
          className="absolute top-4 left-4 text-gray-500 text-sm pointer-events-none transition-all duration-300 transform 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                     peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:left-3 
                     peer-focus:text-[var(--sara-red)] bg-white px-1"
        >
          Message
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="sara-btn-primary w-full py-3 text-lg font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--sara-red)] disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit Message"}
      </button>
    </form>
  );
}
