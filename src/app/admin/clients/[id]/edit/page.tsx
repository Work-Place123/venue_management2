'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function EditClientPage() {
  const { id } = useParams()
  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: '',
  })

  // In real app, you'd fetch client by ID here
  useEffect(() => {
    // dummy fetch simulation
    setClient({
      name: 'Ayesha Khan',
      email: 'ayesha@example.com',
      phone: '0321-1234567',
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Call backend to update (will do later)
    alert('Client updated (frontend only)')
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Client</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input name="name" value={client.name} onChange={handleChange} className="w-full border px-3 py-2 rounded text-sm" />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input name="email" value={client.email} onChange={handleChange} className="w-full border px-3 py-2 rounded text-sm" />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input name="phone" value={client.phone} onChange={handleChange} className="w-full border px-3 py-2 rounded text-sm" />
        </div>

        <div className="flex justify-between mt-6">
          <Link href="/admin/clients" className="text-sm text-gray-600 hover:underline">← Back</Link>
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-500">Update Client</button>
        </div>
      </form>
    </div>
  )
}
