import { SEO } from '../components/SEO';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Afsar Uddin Chemical Co. for inquiries, support, or factory visits."
      />

      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-slate-300">We're here to help and answer any question you might have.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Phone className="w-6 h-6 text-emerald-600" />,
              title: "Call Us",
              details: ["+880 1712 345678", "+880 1812 345678"],
              action: "Call now"
            },
            {
              icon: <Mail className="w-6 h-6 text-emerald-600" />,
              title: "Email Us",
              details: ["info@afsaruddin.com", "sales@afsaruddin.com"],
              action: "Send email"
            },
            {
              icon: <MapPin className="w-6 h-6 text-emerald-600" />,
              title: "Visit Us",
              details: ["123 Industrial Zone, Tongi", "Gazipur, Bangladesh"],
              action: "Get directions"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <div className="space-y-1 mb-6">
                {item.details.map((line, i) => (
                  <p key={i} className="text-slate-600">{line}</p>
                ))}
              </div>
              <button className="text-emerald-600 font-semibold hover:text-emerald-700 text-sm uppercase tracking-wide">
                {item.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Map */}
          <div className="bg-white p-2 rounded-2xl shadow-lg h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.356877962456!2d90.39945231498376!3d23.87694498452719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c44884255555%3A0x8454545454545454!2sTongi%20Industrial%20Area!5e0!3m2!1sen!2sbd!4v1625555555555!5m2!1sen!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1rem' }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>

          {/* General Inquiry Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="email@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Write your message here..."></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-emerald-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
