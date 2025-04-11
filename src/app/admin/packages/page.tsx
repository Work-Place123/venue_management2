'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function PackagesPage() {
  const router = useRouter()

  const packages = [
    {
      id: 1,
      name: 'Birthday Bash',
      price: '10000',
      description: 'Birthday decor, cake, and photo shoot'
    },
    {
      id: 2,
      name: 'Wedding Gold',
      price: '25000',
      description: 'Stage decor, photographer, and catering'
    }
  ]

  const handleDelete = (id: number) => {
    const confirm = window.confirm('Are you sure you want to delete this package?')
    if (confirm) {
      // will connect with backend later
      alert(`Package with ID ${id} deleted (frontend only)`)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Packages</h1>
        <Link
          href="/admin/packages/new"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition text-sm"
        >
          + Add Package
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Description</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, idx) => (
              <tr key={pkg.id} className="border-t text-sm">
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">{pkg.name}</td>
                <td className="p-3">Rs. {pkg.price}</td>
                <td className="p-3">{pkg.description}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => router.push(`/admin/packages/${pkg.id}`)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(pkg.id)}
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
