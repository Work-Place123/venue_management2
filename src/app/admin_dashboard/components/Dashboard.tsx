"use client";

import { useState } from "react";
import { Home, Users, Calendar, Image, FileText, Upload, Settings, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white shadow-md w-${isSidebarOpen ? "64" : "20"} transition-all duration-300 p-4`}>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full flex flex-col items-center border-b pb-4">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              LM
            </div>
            <p className="font-bold mt-2">Liam Moore</p>
            <p className="text-sm text-gray-500">Administrator</p>
                  </div>
          <nav className="w-full space-y-2 ">
            {[
              { label: "Dashboard", icon: Home },
              { label: "Blogs & Events", icon: FileText },
              { label: "Clients", icon: Users },
              { label: "Services", icon: Calendar },
              { label: "Gallery", icon: Image },
              { label: "Upload Photos", icon: Upload },
              { label: "User Management", icon: Settings },
              { label: "Task Calendar", icon: Calendar },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer transition"
              >
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium text-sm">{label}</span>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-600 text-xl">
            {/* ☰ */}
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-gray-800 font-medium">Liam Moore</span>
            <button className="text-red-500 flex items-center space-x-1">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Dashboard Cards */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {[
            { label: "Total Customers", count: 32, color: "bg-blue-500", icon: Users },
            { label: "Total Bookings", count: 31, color: "bg-green-500", icon: Calendar },
            { label: "Photos", count: 2, color: "bg-red-500", icon: Image },
            { label: "Blogs", count: 14, color: "bg-cyan-500", icon: FileText },
          ].map(({ label, count, color, icon: Icon }) => (
            <div key={label} className={`flex items-center ${color} text-white p-6 rounded-lg shadow-md space-x-4`}>
              <Icon className="w-12 h-12" />
              <div>
                <p className="text-3xl font-bold">{count}</p>
                <p className="text-lg">{label}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}