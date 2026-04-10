import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Wifi, Tv, Wind, Coffee, Bath, ShieldCheck, MessageCircle, Star, Check, Clock } from 'lucide-react';

const roomCategories = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: '₹2,499',
    desc: 'Our Deluxe Rooms offer a perfect blend of comfort and elegance, ideal for solo travelers or couples.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1200',
    amenities: ['King Size Bed', 'Air Conditioning', 'High-speed WiFi', '32" LED TV', 'Tea/Coffee Maker', 'Modern Bathroom'],
    features: [
      { icon: <Wifi size={20} />, label: 'Free WiFi' },
      { icon: <Wind size={20} />, label: 'AC' },
      { icon: <Tv size={20} />, label: 'LED TV' },
      { icon: <Coffee size={20} />, label: 'Tea Maker' },
    ]
  },
  {
    id: 'super-deluxe',
    name: 'Super Deluxe Room',
    price: '₹3,499',
    desc: 'Experience premium luxury in our Super Deluxe Rooms, featuring spacious interiors and enhanced amenities.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
    amenities: ['Premium King Bed', 'Centralized AC', 'High-speed WiFi', '43" Smart TV', 'Mini Bar', 'Bath Tub', '24/7 Room Service'],
    features: [
      { icon: <Wifi size={20} />, label: 'Free WiFi' },
      { icon: <Wind size={20} />, label: 'Central AC' },
      { icon: <Tv size={20} />, label: 'Smart TV' },
      { icon: <Bath size={20} />, label: 'Bath Tub' },
    ]
  },
];

export default function Rooms() {

  useEffect(() => {
    document.title = "Rooms in Haridwar | Shoolin Suites Hotel";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Book Deluxe and Super Deluxe rooms at Shoolin Suites Hotel Haridwar near Bhupatwala. AC rooms with WiFi, Smart TV and premium comfort at best price."
      );
    }
  }, []);

  return (
    <>

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1920"
            alt="Rooms Header"
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
            Rooms & Suites
          </motion.h1>
          <p className="text-gold uppercase tracking-[0.4em] font-semibold text-sm">
            Elegance Meets Comfort
          </p>
        </div>
      </section>

      {/* Room List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {roomCategories.map((room, i) => (
            <div key={room.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-3xl shadow-2xl ${i % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                  <div className="text-gold font-bold text-2xl">{room.price}<span className="text-xs text-ink/40 font-normal">/night</span></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gold">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-ink">{room.name}</h2>
                  <p className="text-ink/60 text-lg leading-relaxed">{room.desc}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {room.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-ink/80 font-medium">
                      <div className="w-10 h-10 rounded-xl bg-beige flex items-center justify-center text-gold">
                        {feature.icon}
                      </div>
                      <span className="text-sm">{feature.label}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-beige">
                  <h4 className="font-bold text-sm uppercase tracking-widest text-ink/40">Room Amenities</h4>
                  <div className="grid grid-cols-2 gap-y-3">
                    {room.amenities.map((amenity, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-ink/70">
                        <Check size={14} className="text-gold" />
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={`https://wa.me/910000000000?text=I'm interested in booking a ${room.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gold hover:bg-saffron text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-gold/20"
                  >
                    <MessageCircle size={20} />
                    ENQUIRE NOW
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 bg-beige">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-12 rounded-3xl shadow-xl space-y-10">
            <h2 className="text-3xl font-serif font-bold text-center mb-10">Hotel Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold text-gold flex items-center gap-2">
                  <Clock size={18} /> Check-in / Check-out
                </h4>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>Check-in: 12:00 PM</li>
                  <li>Check-out: 11:00 AM</li>
                  <li>Early check-in subject to availability</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-gold flex items-center gap-2">
                  <ShieldCheck size={18} /> Identification
                </h4>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>Valid ID Proof required (Aadhar/Passport)</li>
                  <li>PAN Card is not accepted as ID proof</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
