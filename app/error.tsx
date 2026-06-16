'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#080B10] flex items-center justify-center p-4">
      <div className="bg-[#121824] p-8 rounded-3xl max-w-md w-full text-center shadow-2xl border border-gray-800 space-y-4">
        <div className="w-16 h-16 rounded-full bg-red-950/20 text-red-500 flex items-center justify-center mx-auto border border-red-900/30">
          <AlertTriangle size={32} />
        </div>
        <h2 className="text-xl font-extrabold text-white">Something went wrong!</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          An unexpected error occurred while processing your request. Please try reloading the page.
        </p>
        <button
          onClick={() => reset()}
          className="w-full bg-gradient-to-r from-[#FF2D55] to-[#5856D6] text-white font-bold py-3.5 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
        >
          <RefreshCw size={16} /> Try Again
        </button>
      </div>
    </div>
  )
}
