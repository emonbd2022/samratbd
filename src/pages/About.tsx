import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Globe, History } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <SEO 
        title="About Us" 
        description="Learn about Afsar Uddin Chemical Co., our history, mission, and commitment to quality manufacturing."
      />

      {/* Hero Header */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1565514020176-db793306c5f5?auto=format&fit=crop&q=80" 
            alt="Lab background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Company</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Pioneering excellence in chemical manufacturing since 1995.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                To provide safe, effective, and affordable chemical solutions that improve the quality of life for families across Bangladesh. We strive to innovate continuously while maintaining the highest standards of environmental responsibility.
              </p>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To become the leading chemical manufacturing company in South Asia, known for our integrity, quality, and commitment to sustainable practices.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80" 
                  alt="Vision" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-emerald-600 p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-white mb-2">28+</p>
                <p className="text-emerald-100 font-medium">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <History className="w-8 h-8" />, value: "1995", label: "Established" },
              { icon: <Globe className="w-8 h-8" />, value: "64", label: "Districts Covered" },
              { icon: <Award className="w-8 h-8" />, value: "15+", label: "Awards Won" },
              { icon: <CheckCircle className="w-8 h-8" />, value: "100%", label: "Quality Guaranteed" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm text-emerald-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Journey</h2>
          <div className="space-y-12">
            {[
              { year: "1995", title: "Company Founded", description: "Started as a small manufacturing unit in Tongi with 20 employees." },
              { year: "2005", title: "Nationwide Expansion", description: "Expanded distribution network to cover all major divisions of Bangladesh." },
              { year: "2012", title: "ISO Certification", description: "Achieved ISO 9001:2008 certification for quality management systems." },
              { year: "2020", title: "New Factory", description: "Inaugurated a state-of-the-art automated manufacturing plant in Gazipur." },
              { year: "2024", title: "Green Initiative", description: "Launched eco-friendly product line and sustainable packaging solutions." },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-emerald-100 group-hover:ring-emerald-200 transition-all" />
                  {index !== 4 && <div className="w-0.5 h-full bg-slate-200 mt-4" />}
                </div>
                <div className="pb-8">
                  <span className="text-emerald-600 font-bold text-lg mb-1 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
