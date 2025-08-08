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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    console.log("Contact Form:", formData);
    toast("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--sara-red)]"
          aria-label="Name"
        />
        {errors.name && (
          <p className="text-[var(--sara-red)] text-sm">{errors.name}</p>
        )}
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--sara-red)]"
          aria-label="Email"
        />
        {errors.email && (
          <p className="text-[var(--sara-red)] text-sm">{errors.email}</p>
        )}
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--sara-red)]"
          aria-label="Phone"
        />
        {errors.phone && (
          <p className="text-[var(--sara-red)] text-sm">{errors.phone}</p>
        )}
      </div>
      <div>
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--sara-red)]"
          rows={4}
          aria-label="Message"
        />
      </div>
      <button type="submit" className="sara-btn-primary">
        Submit Message
      </button>
    </form>
  );
}
