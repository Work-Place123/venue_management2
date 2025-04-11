'use client'

import { usePathname } from 'next/navigation'
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import { Toaster } from "react-hot-toast"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  if (isLoginPage) {
    return (
      <>
        {children}
        <Toaster position="top-right" />
      </>
    )
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen flex flex-col bg-gray-100">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
      <Toaster position="top-right" />
    </div>
  )
}
