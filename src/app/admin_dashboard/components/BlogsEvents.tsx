"use client";

import { useState } from "react";
import { Home, Users, Calendar, Image, FileText, Upload, Settings, LogOut, Plus, Edit, Trash } from "lucide-react";

export default function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [events, setEvents] = useState([
    { id: 1, title: "MR. & MRS. Atwood", description: "92-Acre...", location: "Vintners Resort", status: "Published", weddingDate: "03/24/2022", dateCreated: "March 8, 2022, 11:23 AM", datePublished: "April 13, 2022, 6:16 PM" },
    { id: 2, title: "MR. & MRS. Brower", description: "Exchange Vows In...", location: "Blue Moon Rising", status: "Published", weddingDate: "04/18/2022", dateCreated: "March 8, 2022, 11:29 AM", datePublished: "April 13, 2022, 6:17 PM" }
  ]);

  const addNewEvent = () => {
    const newEvent = { id: events.length + 1, title: "New Event", description: "Description...", location: "Location", status: "Drafted", weddingDate: "MM/DD/YYYY", dateCreated: "Today", datePublished: "Unpublished" };
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white shadow-md w-${isSidebarOpen ? "64" : "20"} transition-all duration-300 p-4`}>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full flex flex-col items-center border-b pb-4">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              LM
            </div>
            <p className="font-bold mt-2 text-lg">Liam Moore</p>
            <p className="text-md text-gray-500">Administrator</p>
          </div>
          <nav className="w-full space-y-3">
            {[{ label: "Dashboard", icon: Home }, { label: "Blogs & Events", icon: FileText }].map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-gray-200 cursor-pointer transition">
                <Icon className="w-6 h-6 text-gray-600" />
                <span className="text-gray-800 font-semibold text-base">{label}</span>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-600 text-xl"></button>
          <div className="flex items-center space-x-4">
            <span className="text-gray-800 font-medium text-lg">Liam Moore</span>
            <button className="text-red-500 flex items-center space-x-1 text-lg">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Blogs & Events Section */}
        <main className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Events And Wedding's Information Section</h1>
            <button onClick={addNewEvent} className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
              <Plus className="w-5 h-5 mr-2" /> Add New Info
            </button>
          </div>
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Wedding Date</th>
                <th className="px-4 py-2">Date Created</th>
                <th className="px-4 py-2">Date Published</th>
                <th className="px-4 py-2">Tools</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border-b">
                  <td className="px-4 py-2">{event.title}</td>
                  <td className="px-4 py-2">{event.description}</td>
                  <td className="px-4 py-2">{event.location}</td>
                  <td className="px-4 py-2">{event.status}</td>
                  <td className="px-4 py-2">{event.weddingDate}</td>
                  <td className="px-4 py-2">{event.dateCreated}</td>
                  <td className="px-4 py-2">{event.datePublished}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button className="text-blue-500"><Edit className="w-5 h-5" /></button>
                    <button onClick={() => deleteEvent(event.id)} className="text-red-500"><Trash className="w-5 h-5" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
