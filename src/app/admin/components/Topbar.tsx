'use client'

import { useRouter } from 'next/navigation'

export default function Topbar() {
  const router = useRouter()

  const handleLogout = () => {
    // TODO: Clear session/auth here
    router.push('/admin/login')
  }

  return (
    <div className="bg-white px-6 py-4 flex justify-end items-center border-b shadow">
      <span className="text-sm font-medium mr-4">Liam Moore</span>
      <button
        onClick={handleLogout}
        className="text-red-600 text-sm hover:underline"
      >
        Logout
      </button>
    </div>
  )
}
