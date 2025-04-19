'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NewBookingPage() {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    venueType: '',
    packageId: '',
    useCustomPlanner: false,
    customServices: '',           // ✅ updated field name
    customPrice: '',              // ✅ updated field name
    numberOfGuests: '',
    paymentStatus: '',
    paymentMethod: '',
    specialRequests: '',
  })

  const packages = [
    { id: '1', name: 'Premium Wedding Package' },
    { id: '2', name: 'Basic Birthday Package' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBooking({ ...booking, [name]: value })
  }

  const handleToggleCustomPlanner = () => {
    setBooking(prev => ({ ...prev, useCustomPlanner: !prev.useCustomPlanner, packageId: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/booking/manual-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    })

    if (res.ok) {
      alert('Booking saved!')
    } else {
      alert('Error saving booking.')
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Manual Booking Entry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Client Details */}
        <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Client Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Client Name" value={booking.name} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="email" name="email" placeholder="Client Email" value={booking.email} onChange={handleChange} required className="border p-2 rounded w-full" />
          <input type="text" name="phone" placeholder="Client Phone" value={booking.phone} onChange={handleChange} required className="border p-2 rounded w-full" />
        </div>

        {/* Package Details */}
        <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Package Details</h3>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="useCustom" checked={booking.useCustomPlanner} onChange={handleToggleCustomPlanner} />
          <label htmlFor="useCustom">Use Custom Planner?</label>
        </div>

        {!booking.useCustomPlanner ? (
          <div>
            <label className="block text-sm font-medium mb-1">Select Package</label>
            <select name="packageId" value={booking.packageId} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="">Choose a Package</option>
              {packages.map(pkg => (
                <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Enter Custom Services (comma-separated)</label>
            <input
              type="text"
              name="customServices" // ✅ updated name
              value={booking.customServices}
              onChange={handleChange}
              placeholder="e.g. catering, photography, DJ"
              className="w-full border p-2 rounded"
            />
            <input
              type="number"
              name="customPrice" // ✅ updated name
              value={booking.customPrice}
              onChange={handleChange}
              placeholder="Total Price for Custom Package"
              className="w-full border p-2 rounded"
            />
          </div>
        )}

        {/* Event Details */}
        <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Event Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="date" name="eventDate" value={booking.eventDate} onChange={handleChange} required className="border p-2 rounded w-full" />
          <select name="venueType" value={booking.venueType} onChange={handleChange} required className="w-full border p-2 rounded">
            <option value="">Select Venue Type</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
            <option value="Banquet">Banquet</option>
          </select>
          <input
            type="number"
            name="numberOfGuests"
            placeholder="Number of Guests"
            value={booking.numberOfGuests}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Payment Details */}
        <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Payment Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select name="paymentStatus" value={booking.paymentStatus} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">Payment Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
          <select name="paymentMethod" value={booking.paymentMethod} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Online Payment">Online Payment</option>
          </select>
        </div>

        {/* Special Requirements */}
        <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Special Requirements</h3>
        <textarea
          name="specialRequests"
          placeholder="Any special requirements from client..."
          value={booking.specialRequests}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="flex justify-between mt-6">
          <Link href="/admin/bookings" className="text-sm text-gray-600 hover:underline">← Back</Link>
          <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500">
            Save Booking
          </button>
        </div>
      </form>
    </div>
  )
}
