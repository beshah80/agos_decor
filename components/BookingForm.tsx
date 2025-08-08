"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  message: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  location?: string;
}

export function BookingForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "";
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: initialType,
    eventDate: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.eventType) newErrors.eventType = "Event type is required";
    if (!formData.eventDate) newErrors.eventDate = "Event date is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    console.log("Booking Form:", formData);
    toast("Booking request sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      location: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--sara-red)]"
            aria-label="First Name"
          />
          {errors.firstName && (
            <p className="text-[var(--sara-red)] text-sm">{errors.firstName}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--sara-red)]"
            aria-label="Last Name"
          />
          {errors.lastName && (
            <p className="text-[var(--sara-red)] text-sm">{errors.lastName}</p>
          )}
        </div>
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
        <select
          value={formData.eventType}
          onChange={(e) =>
            setFormData({ ...formData, eventType: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--sara-red)]"
          aria-label="Event Type"
        >
          <option value="">Select Event Type</option>
          <option value="wedding">Wedding</option>
          <option value="birthday">Birthday</option>
          <option value="baby-shower">Baby Shower</option>
          <option value="graduation">Graduation</option>
          <option value="corporate">Corporate</option>
          <option value="other">Other</option>
        </select>
        {errors.eventType && (
          <p className="text-[var(--sara-red)] text-sm">{errors.eventType}</p>
        )}
      </div>
      <div>
        <input
          type="date"
          value={formData.eventDate}
          onChange={(e) =>
            setFormData({ ...formData, eventDate: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--sara-red)]"
          aria-label="Event Date"
        />
        {errors.eventDate && (
          <p className="text-[var(--sara-red)] text-sm">{errors.eventDate}</p>
        )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Event Location"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--sara-red)]"
          aria-label="Event Location"
        />
        {errors.location && (
          <p className="text-[var(--sara-red)] text-sm">{errors.location}</p>
        )}
      </div>
      <div>
        <textarea
          placeholder="Message (Optional)"
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
        Submit Booking Request
      </button>
    </form>
  );
}
