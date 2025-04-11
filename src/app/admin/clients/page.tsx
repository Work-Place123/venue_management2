'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

type Client = {
  id: number
  name: string
  email: string
  phone: string
}

export default function ClientsPage() {
  const router = useRouter()

  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: 'Ayesha Khan',
      email: 'ayesha@example.com',
      phone: '0321-1234567',
    },
    {
      id: 2,
      name: 'Ali Raza',
      email: 'ali@example.com',
      phone: '0300-9876543',
    },
  ])

  const handleDelete = (id: number) => {
    const confirmDelete = confirm('Are you sure you want to delete this client?')
    if (!confirmDelete) return

    // Simulate delete
    setClients(clients.filter((client) => client.id !== id))
    toast.success('Client deleted (frontend only)')
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Clients</h1>
        <Link
          href="/admin/clients/new"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition text-sm"
        >
          + Add Client
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={client.id} className="border-t text-sm">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{client.name}</td>
                <td className="p-3">{client.email}</td>
                <td className="p-3">{client.phone}</td>
                <td className="p-3 space-x-2">
                  <Link
                    href={`/admin/clients/${client.id}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {clients.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-sm p-4 text-gray-500">
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
