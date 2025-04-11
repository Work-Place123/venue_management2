'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { toast } from 'react-hot-toast'

export default function EditEventPage() {
  const router = useRouter()
  const { id } = useParams()

  const [event, setEvent] = useState({
    name: '',
    date: '',
    location: '',
  })

  // Fetch existing event data
  useEffect(() => {
    // Simulated dummy data for edit
    // You can later fetch using API: `/api/events/${id}`
    if (id) {
      setEvent({
        name: 'Wedding Ceremony',
        date: '2025-04-20',
        location: 'Lahore',
      })
    }
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 🔁 Later you'll call your backend API here to update event
    toast.success('Event updated (frontend only)')
    router.push('/admin/events')
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            value={event.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Location</label>
          <input
            name="location"
            value={event.location}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
            required
          />
        </div>

        <div className="flex justify-between mt-6">
          <Link href="/admin/events" className="text-sm text-gray-600 hover:underline">
            ← Back
          </Link>
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-500"
          >
            Update Event
          </button>
        </div>
      </form>
    </div>
  )
}
