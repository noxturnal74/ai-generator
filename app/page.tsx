import { Sparkles, Wand2, Download, Share2, RefreshCcw, Settings, History, Star } from 'lucide-react'

export default function AIGeneratorPage() {
  const styles = ['Photorealistic', 'Oil Painting', 'Watercolor', 'Digital Art', 'Pencil Sketch', 'Anime']
  const ratios = ['1:1', '16:9', '4:3', '9:16']
  const generatedImages = [
    { id: 1, prompt: 'Mystical forest at dawn with golden light', style: 'Photorealistic', emoji: '🌲' },
    { id: 2, prompt: 'Futuristic city skyline neon lights', style: 'Digital Art', emoji: '🌃' },
    { id: 3, prompt: 'Portrait of a samurai in cherry blossom garden', style: 'Oil Painting', emoji: '🌸' },
    { id: 4, prompt: 'Deep ocean creatures bioluminescent', style: 'Watercolor', emoji: '🌊' },
  ]

  return (
    <div className="min-h-screen bg-[#000000]">
      <header className="border-b border-gray-800 p-4 sticky top-0 z-10 bg-[#000000]/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF2D55] to-[#5856D6] flex items-center justify-center">
              <Sparkles className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-bold text-white">PixelAI</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-800 text-gray-400"><History size={20} /></button>
            <button className="p-2 rounded-full hover:bg-gray-800 text-gray-400"><Settings size={20} /></button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF2D55] to-[#5856D6] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={14} /> Powered by Stable Diffusion XL
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">Create with AI</h2>
          <p className="text-gray-400">Describe your vision, and watch it come to life</p>
        </div>

        <div className="bg-[#1C1C1E] rounded-2xl p-6 space-y-4">
          <textarea
            placeholder="A breathtaking mountain landscape at golden hour, misty valleys, dramatic lighting, shot with Hasselblad..."
            rows={4}
            className="w-full bg-[#2C2C2E] text-white placeholder-gray-500 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#5856D6] border border-gray-700"
          />
          
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-400">Style</label>
            <div className="flex gap-2 flex-wrap">
              {styles.map((style, i) => (
                <button key={style} className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${i === 0 ? 'bg-[#5856D6] text-white' : 'bg-[#2C2C2E] text-gray-400 hover:text-white hover:bg-[#3A3A3C]'}`}>
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Aspect Ratio</label>
              <div className="flex gap-2">
                {ratios.map((ratio, i) => (
                  <button key={ratio} className={`flex-1 py-2 rounded-xl text-xs font-medium ${i === 0 ? 'bg-[#5856D6] text-white' : 'bg-[#2C2C2E] text-gray-400 hover:text-white'}`}>{ratio}</button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Quality</label>
              <select className="w-full bg-[#2C2C2E] text-white rounded-xl p-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5856D6]">
                <option>Standard</option>
                <option>HD</option>
                <option>4K Ultra</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-[#FF2D55] to-[#5856D6] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <Wand2 size={20} /> Generate Image
          </button>
        </div>

        <div className="bg-[#1C1C1E] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Recent Generations</h3>
            <button className="text-[#5856D6] text-sm font-medium">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {generatedImages.map((img) => (
              <div key={img.id} className="bg-[#2C2C2E] rounded-xl overflow-hidden">
                <div className="h-32 flex items-center justify-center text-6xl">{img.emoji}</div>
                <div className="p-3">
                  <p className="text-white text-xs font-medium truncate mb-1">{img.prompt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{img.style}</span>
                    <div className="flex gap-2">
                      <button className="p-1 hover:text-white text-gray-500"><Download size={14} /></button>
                      <button className="p-1 hover:text-white text-gray-500"><Share2 size={14} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}