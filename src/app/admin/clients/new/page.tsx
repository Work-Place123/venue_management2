'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddClientPage() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, phone })

    // TODO: Send data to backend via API
    alert('Client added!')
    router.push('/admin/clients')
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Add New Client</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow max-w-xl">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
        >
          Save Client
        </button>
      </form>
    </div>
  )
}
