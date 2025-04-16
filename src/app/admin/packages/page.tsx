'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function PackagesPage() {
  const [packages, setPackages] = useState<any[]>([])

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch('/api/packages/list') // Fetch from the API route created
        const data = await res.json()
        console.log('Fetched from API:', data)  // Debugging output
        setPackages(data)
      } catch (error) {
        console.error('Error fetching packages:', error)
      }
    }

    fetchPackages()
  }, [])

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Are you sure you want to delete this package?')
    if (confirm) {
      try {
        const res = await fetch(`/api/packages/delete/${id}`, { method: 'DELETE' })
        if (res.status === 204) {
          alert('Package deleted successfully')
          setPackages(packages.filter(pkg => pkg.id !== id))
        } else {
          alert('Failed to delete package')
        }
      } catch (error) {
        console.error('Error deleting package:', error)
        alert('An error occurred while deleting the package')
      }
    }
  }
  
 
  const handleEdit = (id: number) => {
    window.location.href = `/admin/packages/edit/${id}`;
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
              <th className="p-3">Event</th>
              <th className="p-3">Venue</th>
              <th className="p-3">Type</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Features</th>
              <th className="p-3">Description</th>
              <th className="p-3">Image</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, idx) => (
              <tr key={pkg.id} className="border-t text-sm">
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">{pkg.event_category}</td>
                <td className="p-3">{pkg.venue_type}</td>
                <td className="p-3">{pkg.package_type}</td>
                <td className="p-3">{pkg.name}</td>
                <td className="p-3">Rs. {pkg.price}</td>
                <td className="p-3">{pkg.package_features}</td>
                <td className="p-3">{pkg.description}</td>
                <td className="p-3">
                  {pkg.image_url ? (
                    <img src={pkg.imageUrl} alt={pkg.name} className="w-20 h-12 object-cover" />
                  ) : (
                    'N/A'
                  )}
                </td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleEdit(pkg.id)}
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
