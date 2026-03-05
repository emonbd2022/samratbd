import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Factory, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-50">
      <SEO 
        title="Home" 
        description="Afsar Uddin Chemical Co. - Leading manufacturer of mosquito coils and chemical products in Bangladesh."
        keywords="mosquito coil, chemical products, manufacturing, bangladesh, wholesale"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
            alt="Factory Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Protecting Families,<br />
            <span className="text-emerald-400">Powering Industries</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Since 1995, Afsar Uddin Chemical Co. has been a trusted name in manufacturing high-quality mosquito coils and chemical solutions. We combine advanced technology with safety standards to deliver excellence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/products" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
            >
              Explore Products <ArrowRight size={20} />
            </Link>
            <Link 
              to="/distributors" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Become a Distributor
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We are committed to quality, safety, and reliability in every product we manufacture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-12 h-12 text-emerald-600" />,
                title: "Quality Assurance",
                description: "ISO 9001:2015 certified manufacturing process ensuring consistent high quality."
              },
              {
                icon: <Factory className="w-12 h-12 text-emerald-600" />,
                title: "Advanced Technology",
                description: "State-of-the-art machinery and automated production lines for efficiency."
              },
              {
                icon: <Users className="w-12 h-12 text-emerald-600" />,
                title: "Nationwide Network",
                description: "Strong distribution network covering 64 districts of Bangladesh."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className="mb-6 p-4 bg-emerald-50 rounded-xl inline-block group-hover:bg-emerald-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
              <p className="text-slate-600 max-w-2xl">
                Discover our range of effective and safe chemical solutions.
              </p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Premium Mosquito Coil",
                image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80",
                category: "Insect Repellent"
              },
              {
                name: "Industrial Chemical Solvent",
                image: "https://images.unsplash.com/photo-1605557202138-097824c3f555?auto=format&fit=crop&q=80",
                category: "Industrial"
              },
              {
                name: "Household Cleaner",
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
                category: "Household"
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 block">{product.category}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <Link to="/products" className="text-slate-500 hover:text-emerald-600 font-medium inline-flex items-center gap-1 text-sm mt-2 transition-colors">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Join our nationwide network of successful distributors. We provide competitive margins, marketing support, and reliable supply.
          </p>
          <Link 
            to="/distributors" 
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25"
          >
            Apply for Distributorship
          </Link>
        </div>
      </section>
    </div>
  );
}
