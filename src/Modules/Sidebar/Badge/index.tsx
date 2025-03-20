'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

interface BadgeProps {
  label: string
  icon: React.ReactNode
  url: string
}

const Badge: React.FC<BadgeProps> = ({ label, icon, url }) => {
  const router = useRouter()

  return (
    <div
      className="relative w-full text-gray-800 flex items-center gap-4 px-5 py-3 cursor-pointer 
                 transition-all rounded-lg bg-gray-100 hover:bg-blue-500 hover:text-white active:scale-95 shadow-sm"
      onClick={() => router.push(url)}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  )
}

export default Badge
