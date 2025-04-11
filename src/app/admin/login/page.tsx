'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace this with real auth
    if (email === 'admin@example.com' && password === 'admin123') {
      router.push('/admin') // redirect to dashboard
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-sm space-y-4">
        <h2 className="text-xl font-bold">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-500 w-full">
          Login
        </button>
      </form>
    </div>
  )
}
