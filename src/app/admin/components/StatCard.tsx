import { ReactNode } from 'react'

interface StatCardProps {
  title: string
  value: number
  icon: ReactNode
  color?: string
}

export default function StatCard({ title, value, icon, color = 'bg-gray-500' }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow hover:shadow-md transition">
      <div className={`p-3 rounded-full text-white ${color}`}>
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  )
}
