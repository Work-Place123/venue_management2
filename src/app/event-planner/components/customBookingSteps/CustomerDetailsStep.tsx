'use client';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

type FormData = {
  fullName?: string;
  email?: string;
  phone?: string;
  cnic?: string;
  eventType?: string;
  eventDate?: string;
  timeSlot?: string;
  guestCount?: number;
  specialInstructions?: string;
  termsAccepted?: boolean;
};

type Props = {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onNext: () => void;
};

const CustomerDetailsStep = ({ formData, setFormData, onNext }: Props) => {
  const [fullName, setFullName] = useState(formData.fullName || '');
  const [email, setEmail] = useState(formData.email || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [cnic, setCnic] = useState(formData.cnic || '');
  const [eventType, setEventType] = useState(formData.eventType || '');
  const [eventDate, setEventDate] = useState(formData.eventDate || '');
  const [timeSlot, setTimeSlot] = useState(formData.timeSlot || '');
  const [guestCount, setGuestCount] = useState(formData.guestCount || 0);
  const [specialInstructions, setSpecialInstructions] = useState(formData.specialInstructions || '');
  const [termsAccepted, setTermsAccepted] = useState(formData.termsAccepted || false);

  useEffect(() => {
    setFullName(formData.fullName || '');
    setEmail(formData.email || '');
    setPhone(formData.phone || '');
    setCnic(formData.cnic || '');
    setEventType(formData.eventType || '');
    setEventDate(formData.eventDate || '');
    setTimeSlot(formData.timeSlot || '');
    setGuestCount(formData.guestCount || 0);
    setSpecialInstructions(formData.specialInstructions || '');
    setTermsAccepted(formData.termsAccepted || false);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedData = {
      fullName,
      email,
      phone,
      cnic,
      eventType,
      eventDate,
      timeSlot,
      guestCount,
      specialInstructions,
      termsAccepted,
    };

    setFormData(updatedData);

    if (termsAccepted) {
      onNext();
    }
  };

  return (
    <div className="space-y-8 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Customer Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* CNIC */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">CNIC / ID Number (Optional)</label>
          <input
            type="text"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="CNIC / ID Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Event Type</label>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">-- Select Event Type --</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Event Date</label>
          <input
            type="date"
            value={eventDate}
            min={new Date().toISOString().split("T")[0]} // Disable past dates
            onChange={(e) => {
              const selectedDate = new Date(e.target.value);
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              if (selectedDate < today) {
                toast.error('❌ Please select a valid future date.');
                setEventDate('');
                return;
              }
              setEventDate(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Time Slot */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Time Slot</label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">-- Select Time Slot --</option>
            <option value="12:00 PM - 4:00 PM">12:00 PM – 4:00 PM</option>
            <option value="6:00 PM - 10:00 PM">6:00 PM – 10:00 PM</option>
          </select>
        </div>

        {/* Guest Count */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Number of Guests</label>
          <input
            type="number"
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            placeholder="Guests expected"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">Special Instructions</label>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            placeholder="Any requests or notes"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Terms */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mr-2"
          />
          <span className="text-sm text-gray-600">I accept the terms & conditions</span>
        </div>

        {/* Submit */}
        <div className="mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md disabled:opacity-50"
            disabled={!termsAccepted}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerDetailsStep;
