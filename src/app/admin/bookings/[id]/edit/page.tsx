'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function EditBookingPage() {
  const { id } = useParams()
  const router = useRouter()

  const [booking, setBooking] = useState({
    clientId: '',
    packageId: '',
    eventDate: '',
  })

  // Dummy data (simulate real fetch)
  const clients = [
    { id: 1, name: 'Ayesha Khan' },
    { id: 2, name: 'Ali Raza' },
  ]

  const packages = [
    { id: 1, name: 'Premium Wedding Package' },
    { id: 2, name: 'Basic Event Package' },
  ]

  useEffect(() => {
    // Simulate fetch booking by ID
    setBooking({
      clientId: '1',
      packageId: '2',
      eventDate: '2025-05-01',
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Booking updated (frontend only)')
    router.push('/admin/bookings')
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Booking</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Client</label>
          <select
            name="clientId"
            value={booking.clientId}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
          >
            <option value="">Select client</option>
            {clients.map(client => (
              <option key={client.id} value={client.id}>{client.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Package</label>
          <select
            name="packageId"
            value={booking.packageId}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
          >
            <option value="">Select package</option>
            {packages.map(pkg => (
              <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={booking.eventDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
          />
        </div>

        <div className="flex justify-between mt-6">
          <Link href="/admin/bookings" className="text-sm text-gray-600 hover:underline">← Back</Link>
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-500">
            Update Booking
          </button>
        </div>
      </form>
    </div>
  )
}
