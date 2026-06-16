export default function Loading() {
  return (
    <div className="min-h-screen bg-[#080B10] p-4 space-y-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Skeleton */}
        <div className="h-16 bg-[#121824] border border-gray-800 rounded-2xl animate-pulse" />
        
        {/* Title Skeleton */}
        <div className="text-center py-8 space-y-3">
          <div className="w-32 h-6 bg-gray-800 rounded-full mx-auto animate-pulse" />
          <div className="w-48 h-8 bg-gray-800 rounded-full mx-auto animate-pulse" />
        </div>

        {/* Input Form Skeleton */}
        <div className="bg-[#121824] rounded-3xl h-80 animate-pulse border border-gray-800" />

        {/* Generation History Skeleton */}
        <div className="space-y-4">
          <div className="w-32 h-6 bg-gray-800 rounded-full animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map(i => (
              <div key={i} className="bg-[#121824] rounded-3xl h-96 animate-pulse border border-gray-850" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
