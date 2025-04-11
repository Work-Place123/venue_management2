'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

type Event = {
  id: number
  name: string
  date: string
  location: string
}

export default function EventsPage() {
  const router = useRouter()

  // Dummy event data
  const events: Event[] = [
    { id: 1, name: 'Wedding Ceremony', date: '2025-04-20', location: 'Lahore' },
    { id: 2, name: 'Corporate Meetup', date: '2025-05-10', location: 'Karachi' },
  ]

  const handleDelete = (id: number) => {
    // Later: Call API to delete
    toast.success(`Event ${id} deleted`)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Events</h1>
        <Link
          href="/admin/events/new"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition text-sm"
        >
          + Add Event
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Date</th>
              <th className="p-3">Location</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, idx) => (
              <tr key={event.id} className="border-t text-sm">
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">{event.name}</td>
                <td className="p-3">{event.date}</td>
                <td className="p-3">{event.location}</td>
                <td className="p-3 space-x-2">
                  <Link href={`/admin/events/${event.id}/edit`} className="text-blue-600 hover:underline text-sm">Edit</Link>
                  <button
                    onClick={() => handleDelete(event.id)}
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
