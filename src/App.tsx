/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Truck, 
  Bus, 
  Train, 
  Plane, 
  Briefcase, 
  ShoppingBag, 
  Shield, 
  Trash2, 
  Bug, 
  Droplets, 
  Fuel, 
  Hammer, 
  Heart, 
  WashingMachine, 
  Utensils, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  Menu,
  X,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const sectors = [
  { name: "Road Freight", icon: Truck },
  { name: "Passenger", icon: Bus },
  { name: "Rail", icon: Train },
  { name: "Civil Aviation", icon: Plane },
  { name: "Travel Agencies", icon: Briefcase },
  { name: "Transport Retail Services", icon: ShoppingBag },
  { name: "Car Parking", icon: ShoppingBag },
  { name: "Toll Gates", icon: Shield },
  { name: "General Security Services", icon: Shield },
  { name: "General Cleaning", icon: Trash2 },
  { name: "Pest Control Services", icon: Bug },
  { name: "Hygiene Services", icon: Droplets },
  { name: "Petrol Attendant", icon: Fuel },
  { name: "Farm Workers", icon: Hammer },
  { name: "Construction Workers", icon: Hammer },
  { name: "Funeral Undertaking Workers", icon: Heart },
  { name: "Laundry", icon: WashingMachine },
  { name: "Dry-Cleaning Workers", icon: WashingMachine },
  { name: "Retail Workers", icon: ShoppingBag },
  { name: "Hospitality Services", icon: Utensils },
];

const objectives = [
  "Protect member's job security",
  "Oppose unjust retrenchment processes and unfair dismissals",
  "Advance and defend socio-economic interests and rights",
  "Eradicate all types of unfair discrimination in workplaces",
  "Offer legal support regarding employment and social justice issues"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    sector: '',
    message: ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name must be filled first';
    if (!formData.email.trim()) newErrors.email = 'Email address must be filled first';
    if (!formData.sector || formData.sector === 'Select your sector') newErrors.sector = 'Sector must be selected first';
    if (!formData.message.trim()) newErrors.message = 'Message must be filled first';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setShowSuccess(true);
    // In a real app, you would send the data here
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <a href="/" className="flex items-center gap-2 sm:gap-3 group">
              <img 
                src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1773062502/WhatsApp_Image_2026-03-09_at_13.29.27_lmqkpl.jpg" 
                alt="NATSAWU Logo" 
                className="h-[40px] sm:h-[50px] w-auto object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold leading-tight text-[#E30613] group-hover:text-[#E30613]/80 transition-colors">NATSAWU</span>
                <span className="text-[8px] sm:text-[10px] font-medium tracking-wider uppercase text-gray-500 hidden xs:block">
                  National Transport, Security & Allied Workers Union
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Scope', 'Objectives', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-600 hover:text-[#E30613] transition-colors"
                >
                  {item}
                </a>
              ))}
              <a href="#contact" className="bg-[#E30613] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#E30613]/90 transition-all shadow-lg shadow-[#E30613]/20">
                Join Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-8 space-y-6">
                {['Home', 'About', 'Scope', 'Objectives', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="block text-2xl font-bold text-gray-800 border-b border-gray-50 pb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full bg-[#E30613] text-white py-4 rounded-2xl font-bold text-center text-lg shadow-lg shadow-[#E30613]/20">
                  Join Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-[80vh] flex items-center overflow-hidden bg-[#1A1A1A]">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1773062502/WhatsApp_Image_2026-03-09_at_13.29.27_lmqkpl.jpg" 
              alt="Transport and Logistics" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                We are <span className="text-[#E30613]">Stronger</span> Together
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed px-4 md:px-0">
                Organising the unorganised workers across all sectors and industries to create an equitable system that safeguards the rights of all South Africans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-4 md:px-0">
                <a href="#contact" className="bg-[#E30613] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-[#E30613]/30 text-center">
                  Become a Member
                </a>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-[#D4AF37]" />
          <div className="absolute bottom-2 left-0 w-full h-2 bg-[#E30613]" />
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10">
                  <img 
                    src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1773062502/WhatsApp_Image_2026-03-09_at_13.29.27_lmqkpl.jpg" 
                    alt="NATSAWU Commitment" 
                    className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5] md:aspect-auto"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-8 rounded-3xl shadow-2xl hidden lg:block border-4 border-white">
                    <p className="text-[#1A1A1A] font-black text-5xl leading-none">100%</p>
                    <p className="text-[#1A1A1A]/80 font-bold uppercase tracking-widest text-[10px] mt-2">Dedicated to you</p>
                  </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#E30613]/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#E30613] font-bold uppercase tracking-[0.2em] text-xs mb-4">Preamble</h2>
                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-[#1A1A1A]">
                  Our Commitment to <br />
                  <span className="text-[#E30613]">South African</span> Workers
                </h3>
                <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                  <p className="font-medium text-gray-900">
                    NATSAWU is dedicated to working alongside community members and progressive organisations to create an equitable system that safeguards the rights of all South Africans.
                  </p>
                  <p>
                    We organise unorganised workers across all sectors and industries, unifying them under a strong trade union banner. Our cornerstone is providing quality services and unwavering support to our members.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { title: "Quality Service", desc: "Excellence in representation" },
                    { title: "Legal Support", desc: "Expert advice & protection" },
                    { title: "Job Security", desc: "Fighting for your future" },
                    { title: "Fair Treatment", desc: "Equality in the workplace" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#E30613]/5 rounded-xl flex items-center justify-center text-[#E30613] group-hover:bg-[#E30613] group-hover:text-white transition-all">
                        <ChevronRight size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-[#1A1A1A] leading-none">{item.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scope Section */}
        <section id="scope" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-[#E30613]">Scope of NATSAWU</h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
              The Union operates across a wide range of sectors and industries, ensuring every worker has a voice.
            </p>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {sectors.map((sector, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#E30613]/20 transition-all group text-center"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-[#E30613] group-hover:text-white transition-colors mx-auto mb-3 sm:mb-4">
                    <sector.icon size={20} />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-gray-800 leading-tight">{sector.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="py-24 bg-[#1A1A1A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Aims & Objectives</h2>
              <div className="w-24 h-1 bg-[#E30613] mx-auto" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                {objectives.map((obj, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#E30613] rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-base sm:text-lg font-medium text-gray-200">{obj}</p>
                  </motion.div>
                ))}
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-[#E30613]/20 blur-3xl rounded-full" />
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                  alt="Union Meeting" 
                  className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-4xl font-black mb-6">Get in Touch</h2>
                <p className="text-gray-500 mb-10 text-lg">
                  Have questions or want to join? Reach out to our team today.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#E30613]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                      <p className="font-bold text-gray-800">071 489 1384</p>
                      <p className="font-bold text-gray-800">079 496 4324</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#E30613]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                      <p className="font-bold text-gray-800">headoffice@natsawu.org.za</p>
                      <p className="font-bold text-gray-800">info@natsawu.org.za</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#E30613]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Us</p>
                      <p className="font-bold text-gray-800 leading-relaxed">
                        Office No.8 Merlite Building,<br />
                        11 Shippard Street, Mahikeng, 2745
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-gray-50 p-6 sm:p-8 md:p-12 rounded-3xl space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 outline-none transition-all text-base`} 
                        placeholder="John Doe" 
                      />
                      {errors.fullName && <p className="text-red-500 text-xs font-bold mt-1">{errors.fullName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 outline-none transition-all text-base`} 
                        placeholder="john@example.com" 
                      />
                      {errors.email && <p className="text-red-500 text-xs font-bold mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Sector</label>
                    <select 
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.sector ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 outline-none transition-all text-base bg-white`}
                    >
                      <option>Select your sector</option>
                      {sectors.map(s => <option key={s.name}>{s.name}</option>)}
                    </select>
                    {errors.sector && <p className="text-red-500 text-xs font-bold mt-1">{errors.sector}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 outline-none transition-all text-base`} 
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs font-bold mt-1">{errors.message}</p>}
                  </div>
                  <button className="w-full bg-[#E30613] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#E30613]/90 transition-all shadow-lg shadow-[#E30613]/20">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1773062502/WhatsApp_Image_2026-03-09_at_13.29.27_lmqkpl.jpg" 
                alt="NATSAWU Logo" 
                className="h-10 w-auto object-contain rounded-md"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold">NATSAWU</span>
            </div>
            
            <p className="text-[#D4AF37] font-bold italic text-lg">
              "We are Stronger Together"
            </p>

            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NATSAWU. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccess(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2.5rem] p-10 md:p-16 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-3xl font-black text-[#1A1A1A] mb-4">Message Sent!</h3>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                Thank you for reaching out. A NATSAWU representative will contact you shortly.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="w-full bg-[#E30613] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#E30613]/90 transition-all shadow-lg shadow-[#E30613]/20"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
