'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

type Booking = {
  id: number
  client: string
  package: string
  eventDate: string
}

export default function BookingsPage() {
  const router = useRouter()

  // Dummy data (replace with real fetch later)
  const bookings: Booking[] = [
    {
      id: 1,
      client: 'Ayesha Khan',
      package: 'Premium Wedding Package',
      eventDate: '2025-05-01',
    },
    {
      id: 2,
      client: 'Ali Raza',
      package: 'Birthday Shoot Package',
      eventDate: '2025-05-12',
    },
  ]

  const handleDelete = (id: number) => {
    // Later: Call API to delete
    toast.success(`Booking ${id} deleted`)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Bookings</h1>
        <Link
          href="/admin/bookings/new"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition text-sm"
        >
          + Add Booking
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="p-3">#</th>
              <th className="p-3">Client</th>
              <th className="p-3">Package</th>
              <th className="p-3">Event Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <tr key={booking.id} className="border-t text-sm">
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">{booking.client}</td>
                <td className="p-3">{booking.package}</td>
                <td className="p-3">{booking.eventDate}</td>
                <td className="p-3 space-x-2">
                  <Link
                    href={`/admin/bookings/${booking.id}/edit`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
