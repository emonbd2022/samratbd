import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Filter } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Super Guard Mosquito Coil",
    category: "Mosquito Coils",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80",
    description: "Long-lasting protection against mosquitoes. 12-hour burn time with pleasant fragrance.",
    features: ["12 Hours Protection", "Low Smoke", "Pleasant Scent"]
  },
  {
    id: 2,
    name: "Green Shield Coil",
    category: "Mosquito Coils",
    image: "https://images.unsplash.com/photo-1585652684391-76a7db185587?auto=format&fit=crop&q=80",
    description: "Eco-friendly plant-based mosquito repellent coil safe for children and pets.",
    features: ["Plant Based", "Non-Toxic", "Biodegradable"]
  },
  {
    id: 3,
    name: "Industrial Solvent X-200",
    category: "Chemical Products",
    image: "https://images.unsplash.com/photo-1605557202138-097824c3f555?auto=format&fit=crop&q=80",
    description: "High-grade industrial solvent for manufacturing and cleaning applications.",
    features: ["99.9% Purity", "Fast Evaporation", "Industrial Grade"]
  },
  {
    id: 4,
    name: "Power Clean Floor Cleaner",
    category: "Household Products",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    description: "Powerful disinfectant floor cleaner that kills 99.9% of germs.",
    features: ["Kills Germs", "Lemon Scent", "Streak Free"]
  },
  {
    id: 5,
    name: "Textile Dye Fixer",
    category: "Chemical Products",
    image: "https://images.unsplash.com/photo-1576602976110-23385e870e56?auto=format&fit=crop&q=80",
    description: "Premium quality dye fixing agent for textile industry.",
    features: ["Color Fastness", "Eco Friendly", "High Efficiency"]
  },
  {
    id: 6,
    name: "Dish Wash Liquid",
    category: "Household Products",
    image: "https://images.unsplash.com/photo-1585232561307-3f80644e5448?auto=format&fit=crop&q=80",
    description: "Grease-cutting dish wash liquid with lemon extract.",
    features: ["Tough on Grease", "Gentle on Hands", "Lime Extract"]
  }
];

const categories = ["All", "Mosquito Coils", "Chemical Products", "Household Products"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Our Products" 
        description="Browse our wide range of mosquito coils, chemical products, and household cleaning solutions."
      />

      {/* Header */}
      <div className="bg-emerald-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Catalogue</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Explore our diverse range of high-quality products manufactured with precision and care.
          </p>
        </div>
      </div>

      {/* Filter & Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wide">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
