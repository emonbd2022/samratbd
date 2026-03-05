import { SEO } from '../components/SEO';
import { Play } from 'lucide-react';

const videos = [
  {
    id: "dQw4w9WgXcQ", // Placeholder ID
    title: "Factory Tour 2024",
    description: "Take a virtual tour of our state-of-the-art manufacturing facility in Gazipur."
  },
  {
    id: "dQw4w9WgXcQ",
    title: "How Mosquito Coils Are Made",
    description: "Step-by-step explanation of our automated coil production process."
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Product Safety Demonstration",
    description: "Our lab experts demonstrate the safety and efficacy of our products."
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Distributor Success Stories",
    description: "Hear from our successful partners across the country."
  }
];

export default function Videos() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Videos" 
        description="Watch videos about our factory, manufacturing process, and product demonstrations."
      />

      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Video Gallery</h1>
        <p className="text-slate-300">Watch our story unfold.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {videos.map((video, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
              <div className="aspect-video relative bg-slate-200">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-slate-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
