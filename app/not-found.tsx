import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080B10] flex items-center justify-center p-4">
      <div className="bg-[#121824] p-8 rounded-3xl max-w-md w-full text-center shadow-2xl border border-gray-800 space-y-5">
        <div className="w-16 h-16 rounded-full bg-blue-950/20 text-[#007AFF] flex items-center justify-center mx-auto border border-blue-900/30">
          <AlertCircle size={32} />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-extrabold text-white">Page Not Found</h2>
          <p className="text-xs text-gray-400 leading-relaxed">
            The link you followed may be broken, or the page may have been removed.
          </p>
        </div>
        <Link
          href="/"
          className="w-full bg-gradient-to-r from-[#FF2D55] to-[#5856D6] text-white font-bold py-3.5 rounded-2xl transition-all shadow-md flex items-center justify-center active:scale-95"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
