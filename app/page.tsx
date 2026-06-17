'use client'

import { useState } from 'react'
import { Sparkles, Wand2, Download, Share2, RefreshCcw, Settings, History, Star, Loader2, Play } from 'lucide-react'

interface PresetStyle {
  name: string
  image: string
}

interface GeneratedImage {
  id: number
  prompt: string
  style: string
  ratio: string
  image: string
}

export default function AIGeneratorPage() {
  const [prompt, setPrompt] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('Photorealistic')
  const [selectedRatio, setSelectedRatio] = useState('1:1')
  const [generating, setGenerating] = useState(false)
  const [generatingStep, setGeneratingStep] = useState('')
  const [history, setHistory] = useState<GeneratedImage[]>([
    { id: 1, prompt: 'Mystical forest at dawn with golden light, cinematic rendering', style: 'Photorealistic', ratio: '1:1', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=80' },
    { id: 2, prompt: 'Futuristic city skyline neon lights cyberpunk theme', style: 'Digital Art', ratio: '16:9', image: 'https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?w=600&auto=format&fit=crop&q=80' },
    { id: 3, prompt: 'Portrait of a samurai in cherry blossom garden', style: 'Oil Painting', ratio: '4:3', image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&auto=format&fit=crop&q=80' }
  ])

  const styles: PresetStyle[] = [
    { name: 'Photorealistic', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=150&auto=format&fit=crop&q=80' },
    { name: 'Digital Art', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80' },
    { name: 'Oil Painting', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=150&auto=format&fit=crop&q=80' },
    { name: 'Anime', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=150&auto=format&fit=crop&q=80' },
    { name: 'Cyberpunk', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=150&auto=format&fit=crop&q=80' },
  ]

  const ratios = ['1:1', '16:9', '4:3', '9:16']

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setGenerating(true)
    setGeneratingStep('Initializing renderer...')
    
    // Simulate generation steps for production-grade AI feel
    setTimeout(() => {
      setGeneratingStep('Sampling noise vectors...')
      setTimeout(() => {
        setGeneratingStep('Refining details (50%)...')
        setTimeout(() => {
          setGeneratingStep('Polishing canvas (90%)...')
          setTimeout(() => {
            const newImg: GeneratedImage = {
              id: Date.now(),
              prompt: prompt,
              style: selectedStyle,
              ratio: selectedRatio,
              image: `https://images.unsplash.com/featured/?ai,art,${selectedStyle.toLowerCase()},${encodeURIComponent(prompt)}`
            }
            setHistory([newImg, ...history])
            setPrompt('')
            setGenerating(false)
            setGeneratingStep('')
          }, 600)
        }, 600)
      }, 600)
    }, 600)
  }

  return (
    <div className="min-h-screen bg-[#080B10] text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-gray-800/80 p-4 sticky top-0 z-20 bg-[#080B10]/85 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FF2D55] to-[#5856D6] flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Sparkles className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white">PixelAI</h1>
              <p className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">AI Studio</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-colors">
              <History size={18} className="text-gray-400" />
            </button>
            <button className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-colors">
              <Settings size={18} className="text-gray-400" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Welcome Section */}
        <div className="text-center py-8 space-y-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF2D55] to-[#5856D6] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md shadow-purple-500/10">
            <Sparkles size={14} className="animate-spin-slow" /> Powered by Stable Diffusion 3.0
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Create Magic with AI</h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm">Describe your imaginative vision, select presets, and render in high-fidelity.</p>
        </div>

        {/* Input Form */}
        <section className="bg-[#121824] rounded-3xl p-6 border border-gray-800/60 shadow-xl space-y-6">
          <form onSubmit={handleGenerate} className="space-y-4">
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="Describe your vision (e.g., A futuristic cyberpunk city in neon rain, photorealistic, 8k resolution...)"
              rows={3}
              className="w-full bg-[#1A2332] text-white placeholder-gray-500 rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-800"
              required
            />

            {/* Style Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Style presets</label>
              <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none">
                {styles.map((style) => (
                  <button
                    type="button"
                    key={style.name}
                    onClick={() => setSelectedStyle(style.name)}
                    className={`flex-shrink-0 relative w-28 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                      selectedStyle === style.name ? 'border-[#5856D6] scale-102 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={style.image} alt={style.name} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black/50 flex items-end p-2">
                      <span className="text-[10px] font-bold text-white truncate w-full">{style.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Ratio & Submit Button */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-2">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Aspect Ratio</label>
                <div className="flex gap-2">
                  {ratios.map((ratio) => (
                    <button
                      type="button"
                      key={ratio}
                      onClick={() => setSelectedRatio(ratio)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedRatio === ratio 
                          ? 'bg-[#5856D6] border-transparent text-white' 
                          : 'bg-[#1A2332] border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={generating}
                className="w-full bg-gradient-to-r from-[#FF2D55] to-[#5856D6] hover:opacity-95 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-purple-500/20 active:scale-98 flex items-center justify-center gap-2 mt-4 sm:mt-auto"
              >
                {generating ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span className="animate-pulse">{generatingStep}</span>
                  </>
                ) : (
                  <>
                    <Wand2 size={18} />
                    <span>Generate Artwork</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* Live Generation History */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-white">Generation History</h3>

          {history.length === 0 ? (
            <div className="bg-[#121824] rounded-3xl p-12 text-center border border-dashed border-gray-800">
              <div className="text-5xl mb-2">??</div>
              <h4 className="font-bold text-gray-500">No images generated yet</h4>
              <p className="text-xs text-gray-600">Enter a prompt above to create your first artwork!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {history.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-[#121824] rounded-3xl overflow-hidden border border-gray-800/80 shadow-lg flex flex-col group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-gray-900">
                    <img src={item.image} alt={item.prompt} className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-lg uppercase">
                      {item.style} ? {item.ratio}
                    </span>
                  </div>
                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-sm text-gray-300 leading-relaxed italic">"{item.prompt}"</p>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                      <button className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                        <Star className="fill-current" size={14} /> Highlight
                      </button>
                      <div className="flex gap-2">
                        <button className="p-2 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                          <Share2 size={14} className="text-gray-400" />
                        </button>
                        <button className="p-2 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                          <Download size={14} className="text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
