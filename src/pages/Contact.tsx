import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';

export default function Contact() {

  useEffect(() => {
    document.title = "Contact Us | Shoolin Suites Hotel Haridwar";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact Shoolin Suites Hotel Haridwar for room booking, group stay, or travel assistance near Bhupatwala and Dudadhari Chowk."
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will get back to you shortly.');
  };

  return (
    <>

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1920"
            alt="Contact Header"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
          >
            Get In Touch
          </motion.h1>
          <p className="text-gold uppercase tracking-[0.4em] font-semibold text-sm">
            We're Here to Assist You
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-ink leading-tight">
                Connect with <span className="text-gold italic">Shoolin Suites</span>
              </h2>
              <p className="text-ink/60 text-lg leading-relaxed">
                Whether you have a question about our rooms, dining, or local attractions, our team is ready to help you plan your perfect stay in Haridwar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-beige rounded-3xl space-y-4">
                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-ink">Call Us</h4>
                <p className="text-sm text-ink/60">+91 00000 00000</p>
                <a href="tel:+910000000000" className="text-xs font-bold text-gold hover:underline">CALL NOW</a>
              </div>

              <div className="p-8 bg-beige rounded-3xl space-y-4">
                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
                  <MessageCircle size={24} />
                </div>
                <h4 className="font-bold text-ink">WhatsApp</h4>
                <p className="text-sm text-ink/60">+91 00000 00000</p>
                <a href="https://wa.me/910000000000" className="text-xs font-bold text-gold hover:underline">CHAT NOW</a>
              </div>

              <div className="p-8 bg-beige rounded-3xl space-y-4">
                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-ink">Email Us</h4>
                <p className="text-sm text-ink/60">shoolinsuites59@gmail.com</p>
                <a href="mailto:shoolinsuites59@gmail.com" className="text-xs font-bold text-gold hover:underline">SEND EMAIL</a>
              </div>

              <div className="p-8 bg-beige rounded-3xl space-y-4">
                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
                  <Clock size={24} />
                </div>
                <h4 className="font-bold text-ink">Reception</h4>
                <p className="text-sm text-ink/60">Available 24/7</p>
                <div className="text-xs font-bold text-gold">ALWAYS OPEN</div>
              </div>
            </div>

            <div className="p-8 border-2 border-beige rounded-3xl flex items-start gap-6">
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-ink mb-2">Our Location</h4>
                <p className="text-sm text-ink/60 leading-relaxed">
                  Near Bhupatwala, Dudadhari Chowk, Haridwar, Uttarakhand, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-beige"
          >
            <h3 className="text-3xl font-serif font-bold mb-8">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-ink/40">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-beige border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-ink/40">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-beige border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gold outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-ink/40">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-beige border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gold outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-ink/40">Subject</label>
                <select className="w-full bg-beige border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gold outline-none transition-all">
                  <option>Room Booking Enquiry</option>
                  <option>Restaurant Reservation</option>
                  <option>Travel Assistance</option>
                  <option>Other Enquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-ink/40">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-beige border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gold outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-saffron text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-gold/20 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[60vh] bg-beige relative">
        {/* Placeholder for Google Maps Iframe */}
        <div className="absolute inset-0 bg-beige flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin size={48} className="text-gold mx-auto" />
            <p className="text-ink/40 font-bold uppercase tracking-widest">Google Maps Location</p>
            <p className="text-xs text-ink/20 max-w-xs mx-auto italic">
              (In a real deployment, the Google Maps iframe would be embedded here)
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12563.86210190703!2d78.16342568715818!3d29.980520100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470056f186e9%3A0x409c3448f34d512c!2sShoolin%20Suites%20(%20Stellar%20Hospitality)!5e1!3m2!1sen!2sin!4v1772456123702!5m2!1sen!2sin"
          className="w-full h-full border-none grayscale hover:grayscale-0 transition-all duration-700 relative z-10 opacity-80 hover:opacity-100"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
