import { SEO } from '../components/SEO';
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Distributors() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Become a Distributor" 
        description="Join our nationwide network of distributors. Partner with Afsar Uddin Chemical Co. for profitable business opportunities."
      />

      <div className="bg-emerald-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Partner With Us</h1>
          <p className="text-emerald-100 text-lg">
            Join the fastest growing chemical products network in Bangladesh. We offer competitive margins, marketing support, and reliable supply chain.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Benefits Section */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Become a Distributor?</h2>
            <div className="space-y-8">
              {[
                {
                  title: "High Profit Margins",
                  desc: "Enjoy competitive pricing structures designed to maximize your profitability."
                },
                {
                  title: "Exclusive Territories",
                  desc: "Get exclusive distribution rights for your designated area to minimize competition."
                },
                {
                  title: "Marketing Support",
                  desc: "Receive banners, posters, and digital marketing materials to boost sales."
                },
                {
                  title: "Reliable Supply Chain",
                  desc: "Guaranteed timely delivery from our automated factory to your warehouse."
                }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 text-emerald-600">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Application Received!</h3>
                <p className="text-slate-600 mb-8">
                  Thank you for your interest. Our sales team will review your application and contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-600 font-semibold hover:text-emerald-700"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Distributor Application Form</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Your Trading Co." />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="+880 17..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="email@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Business Address / Location</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="District, Thana, Area" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Tell us about your current business..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    Submit Application <Send size={20} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
