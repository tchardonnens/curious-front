import React from 'react'

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col space-y-2 w-full max-w-sm">
      <div className="w-full h-60 rounded animate-pulse bg-gradient-to-r from-gray-400 via-gray-400 to-gray-300"></div>
      <div className="w-full h-6 rounded animate-pulse bg-gradient-to-r from-gray-400 via-gray-400 to-gray-300"></div>
      <div className="w-full h-4 rounded animate-pulse bg-gradient-to-r from-gray-400 via-gray-400 to-gray-300"></div>

    </div>

  )
}


