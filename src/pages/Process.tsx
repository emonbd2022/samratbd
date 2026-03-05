import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Beaker, Wind, Package, Cog, CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <div className="bg-white">
      <SEO 
        title="Manufacturing Process" 
        description="See how we manufacture high-quality mosquito coils using automated technology and strict quality control."
      />

      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Manufacturing Process</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          From raw materials to finished product, we maintain the highest standards of quality and safety.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Automated Production Line</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our factory in Gazipur is equipped with the latest automated machinery imported from Japan and Germany. This ensures consistent quality, precise chemical composition, and high production capacity to meet nationwide demand.
            </p>
            <ul className="space-y-4">
              {[
                "Daily production capacity of 100,000+ units",
                "Automated quality checks at every stage",
                "Environmentally friendly waste management",
                "Worker safety priority protocols"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?mute=1" // Placeholder video
              title="Factory Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-100 hidden md:block" />
          
          {[
            {
              title: "Raw Material Selection",
              description: "We source premium grade wood powder, charcoal, and active ingredients from certified suppliers.",
              icon: <Beaker className="w-8 h-8 text-white" />,
              image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80"
            },
            {
              title: "Mixing & Formulation",
              description: "Ingredients are mixed in precise ratios using automated mixers to ensure uniform efficacy.",
              icon: <Cog className="w-8 h-8 text-white" />,
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
            },
            {
              title: "Coil Forming & Stamping",
              description: "The mixture is pressed into sheets and stamped into the signature coil shape.",
              icon: <Wind className="w-8 h-8 text-white" />,
              image: "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?auto=format&fit=crop&q=80"
            },
            {
              title: "Drying & Curing",
              description: "Coils are dried in temperature-controlled ovens to remove moisture and ensure proper burning.",
              icon: <Wind className="w-8 h-8 text-white" />,
              image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
            },
            {
              title: "Quality Control & Packaging",
              description: "Final inspection is conducted before automated packaging seals the freshness.",
              icon: <Package className="w-8 h-8 text-white" />,
              image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80"
            }
          ].map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 w-full">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
                  <div className="mb-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
                      {step.icon}
                    </div>
                    <span className="text-5xl font-bold text-slate-100 absolute right-4 top-4 select-none">0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full border-4 border-white shadow-xl md:absolute md:left-1/2 md:-translate-x-1/2 hidden md:flex">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>

              <div className="flex-1 w-full">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
