import React from 'react'

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col space-y-2 w-full max-w-sm">
      <div className="w-full h-60 rounded animate-pulse bg-gradient-to-r from-gray-300 via-gray-300/90 to-gray-300/60 dark:from-darkerGrey dark:via-darkerGrey/90 dark:to-darkerGrey/60"></div>
      <div className="w-full h-6 rounded animate-pulse bg-gradient-to-r from-gray-300 via-gray-300/90 to-gray-300/60 dark:from-darkerGrey dark:via-darkerGrey/90 dark:to-darkerGrey/60"></div>
      <div className="w-full h-4 rounded animate-pulse bg-gradient-to-r from-gray-300 via-gray-300/90 to-gray-300/60 dark:from-darkerGrey dark:via-darkerGrey/90 dark:to-darkerGrey/60"></div>
    </div>
  )
}


