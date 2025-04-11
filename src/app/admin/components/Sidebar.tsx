'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, CalendarDays, Users, Package, Upload, Calendar } from 'lucide-react'

const menu = [
  { label: 'Dashboard', icon: <Home size={18} />, href: '/admin' },
  { label: 'Events', icon: <CalendarDays size={18} />, href: '/admin/events' },
  { label: 'Clients', icon: <Users size={18} />, href: '/admin/clients' },
    { label: 'Packages', icon: <Package size={18} />, href: '/admin/packages' },
    { label: 'Bookings', icon: <Calendar size={18} />, href: '/admin/bookings' },
    { label: 'Calendar', icon: <Calendar size={18} />, href: '/admin/calendar' },

    { label: 'Gallery', icon: <Upload size={18} />, href: '/admin/gallery' },
    { label: 'Upload Photos', icon: <Upload size={18} />, href: '/admin/gallery/upload' },

]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-60 bg-red-600 text-white min-h-screen p-4">
      <div className="text-xl font-bold mb-6">WPMS Admin Panel</div>

      <div className="mb-10 text-center">
        <div className="bg-white text-red-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-2 text-lg font-bold">LM</div>
        <div className="font-semibold">Liam Moore</div>
        <div className="text-xs">Administrator</div>
      </div>

      <nav className="flex flex-col gap-4 text-sm">
        {menu.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className={`flex items-center gap-2 p-2 rounded transition ${
              pathname === item.href ? 'bg-red-700' : 'hover:bg-red-500'
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
