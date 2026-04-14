import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Room Booking Enquiry',
    message: '',
  });

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

  // ✅ UPDATED HANDLE SUBMIT (WHATSAPP)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, phone, email, subject, message } = formData;

    const whatsappMessage = `New Enquiry from Website:

Name: ${name}
Phone: ${phone}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "919927511751";

    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");

    // clear form
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'Room Booking Enquiry',
      message: '',
    });
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
                <Phone size={24} />
                <h4>Call Us</h4>
                <p>+91 99275 11751</p>
                <a href="tel:+919927511751">CALL NOW</a>
              </div>

              <div className="p-8 bg-beige rounded-3xl space-y-4">
                <MessageCircle size={24} />
                <h4>WhatsApp</h4>
                <p>+91 99275 11751</p>
                <a href="https://wa.me/919927511751">CHAT NOW</a>
              </div>

              <div className="p-8 bg-beige rounded-3xl space-y-4">
                <Mail size={24} />
                <h4>Email Us</h4>
                <p>shoolinsuites59@gmail.com</p>
              </div>

              <div className="p-8 bg-beige rounded-3xl space-y-4">
                <Clock size={24} />
                <h4>Reception</h4>
                <p>Available 24/7</p>
              </div>

            </div>

            <div className="p-8 border-2 border-beige rounded-3xl flex gap-6">
              <MapPin size={24} />
              <div>
                <h4>Our Location</h4>
                <p>Near Bhupatwala, Dudadhari Chowk, Haridwar</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <motion.div className="bg-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Send an Enquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                required
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 bg-beige"
              />

              <input
                required
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 bg-beige"
              />

              <input
                required
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 bg-beige"
              />

              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-3 bg-beige"
              >
                <option>Room Booking Enquiry</option>
                <option>Restaurant Reservation</option>
              </select>

              <textarea
                required
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 bg-beige"
              />

              <button type="submit" className="w-full bg-gold text-white py-3 flex justify-center gap-2">
                <Send size={18} />
                SEND ON WHATSAPP
              </button>

            </form>
          </motion.div>

        </div>
      </section>
    </>
  );
}