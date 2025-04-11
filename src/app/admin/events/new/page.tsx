'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddEventPage() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [status, setStatus] = useState('Upcoming')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ title, date, location, status })

    // TODO: Connect to backend API
    alert('Event saved!')

    // Redirect back to events list
    router.push('/admin/events')
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Add New Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow max-w-xl">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            className="w-full border p-2 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            className="w-full border p-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Upcoming</option>
            <option>Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
        >
          Save Event
        </button>
      </form>
    </div>
  )
}
