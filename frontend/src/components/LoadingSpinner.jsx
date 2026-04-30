export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative w-16 h-16">
        <div className="spinner"></div>
        <div className="absolute inset-0 flex items-center justify-center text-2xl">✨</div>
      </div>
      <div className="text-center">
        <div className="h-2 w-32 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" style={{
            animation: 'loading 2s ease-in-out infinite'
          }}></div>
        </div>
      </div>
    </div>
  )
}
