'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddPackagePage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app: send to backend
    alert('Package added (frontend only)')
    router.push('/admin/packages')
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Package</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Price</label>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
            rows={3}
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-500"
          >
            Add Package
          </button>
        </div>
      </form>
    </div>
  )
}
