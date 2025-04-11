'use client'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome to Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card: Total Clients */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">Total Clients</h2>
          <p className="text-2xl font-bold">24</p>
        </div>

        {/* Card: Total Events */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">Total Events</h2>
          <p className="text-2xl font-bold">12</p>
        </div>

        {/* Card: Bookings */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">Bookings</h2>
          <p className="text-2xl font-bold">18</p>
        </div>

        {/* Card: Photos Uploaded */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">Photos Uploaded</h2>
          <p className="text-2xl font-bold">342</p>
        </div>
      </div>

      {/* Placeholder: Recent Activity (can be filled later) */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
        <p className="text-sm text-gray-500">You can show recent bookings or uploads here.</p>
      </div>
    </div>
  )
}
