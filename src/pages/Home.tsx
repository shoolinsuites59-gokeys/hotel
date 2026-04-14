import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wifi, Car, Utensils, ShieldCheck, Clock, MapPin, Star, ChevronRight, MessageCircle } from 'lucide-react';

const amenities = [
  { icon: <Wifi size={24} />, title: 'Free WiFi', desc: 'High-speed internet in all rooms' },
  { icon: <Utensils size={24} />, title: 'Multi-cuisine', desc: 'Delicious in-house restaurant' },
  { icon: <Clock size={24} />, title: '24/7 Service', desc: 'Round-the-clock room service' },
  { icon: <Car size={24} />, title: 'Parking', desc: 'Secure on-site parking facility' },
  { icon: <ShieldCheck size={24} />, title: 'Power Backup', desc: 'Uninterrupted power supply' },
  { icon: <MapPin size={24} />, title: 'Travel Desk', desc: 'Local sightseeing assistance' },
];

const featuredRooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    price: '₹2,499',
    image: '/images/rooms.jpeg',
    features: ['King Size Bed', 'City View', 'AC', 'Free WiFi'],
  },
  {
    id: 2,
    name: 'Super Deluxe Room',
    price: '₹3,499',
    image: '/images/room-with-sofa.jpeg',
    features: ['Premium View', 'Mini Bar', 'Bath Tub', 'AC'],
  },
];

export default function Home() {

  useEffect(() => {
    document.title = "Shoolin Suites Hotel Haridwar | Best 3 Star Hotel Near Bhupatwala";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Book your stay at Shoolin Suites Hotel Haridwar near Bhupatwala and Dudadhari Chowk. Premium 3 star hotel with deluxe rooms, restaurant, parking and 24/7 service."
      );
    }
  }, []);

  return (
    <>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.pixabay.com/photo/2022/11/25/13/31/river-ganges-7616245_1280.jpg"
            alt="Haridwar Ganga Ghat"
            className="w-full h-full object-cover scale-110 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.4em] font-semibold text-sm mb-4 block">
              Welcome to Spiritual Luxury
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Shoolin Suites <br /> <span className="text-gold italic">Hotel Haridwar</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the divine essence of Haridwar with premium comfort and exceptional hospitality at Shoolin Suites.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/rooms"
                className="w-full sm:w-auto bg-gold hover:bg-saffron text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-gold/20"
              >
                EXPLORE ROOMS
              </Link>
              <a
                href="https://wa.me/919927511751"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                BOOK ON WHATSAPP
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 motion-safe:animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/front.jpeg"
              alt="Hotel Exterior"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif font-bold text-gold">3*</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-ink/60">
                  Standard <br /> Excellence
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
              A Sanctuary of Peace in the <span className="text-gold">Holy City</span>
            </h2>
            <p className="text-ink/70 leading-relaxed text-lg">
              Located near the serene Dudadhari Chowk, Shoolin Suites Hotel offers a perfect blend of modern amenities and spiritual tranquility. Whether you are here for a pilgrimage or leisure, our hotel provides the ideal base to explore the wonders of Haridwar.
            </p>
            <ul className="space-y-4">
              {['Prime Location near Bhupatwala', 'Walking distance to major Ghats', 'Expert Travel Assistance', 'Family-friendly Atmosphere'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-ink/80 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <Star size={12} fill="currentColor" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold font-bold hover:gap-4 transition-all"
            >
              LEARN MORE ABOUT US <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">World-Class Amenities</h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              We provide everything you need for a comfortable and memorable stay in Haridwar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-beige hover:bg-gold hover:text-white transition-all duration-500 group"
              >
                <div className="text-gold group-hover:text-white mb-6 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold mb-4">Our Featured Rooms</h2>
              <p className="text-ink/60">
                Elegantly designed rooms that offer comfort and style, ensuring a restful night's sleep.
              </p>
            </div>
            <Link
              to="/rooms"
              className="bg-ink text-white px-8 py-3 rounded-full font-bold hover:bg-gold transition-all"
            >
              VIEW ALL ROOMS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredRooms.map((room, i) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-serif font-bold">{room.name}</h3>
                    <div className="text-gold font-bold text-xl">{room.price}<span className="text-xs text-ink/40 font-normal">/night</span></div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {room.features.map((f, j) => (
                      <span key={j} className="text-xs bg-beige px-3 py-1 rounded-full text-ink/60 font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/rooms"
                    className="w-full block text-center border-2 border-gold text-gold hover:bg-gold hover:text-white py-3 rounded-xl font-bold transition-all"
                  >
                    ROOM DETAILS
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Guest Testimonials</h2>
            <p className="text-ink/60">What our valued guests have to say about their stay.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rahul Sharma', text: 'Excellent service and very clean rooms. The staff was very helpful with our travel arrangements.', rating: 5 },
              { name: 'Priya Patel', text: 'The restaurant serves amazing food. Loved the spiritual vibe of the hotel. Highly recommended!', rating: 5 },
              { name: 'Amit Verma', text: 'Perfect location for pilgrims. Very close to the main attractions yet peaceful.', rating: 4 },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl border border-beige bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex text-gold mb-6">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-ink/70 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold">
                    {t.name[0]}
                  </div>
                  <div className="font-bold text-sm">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&q=80&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Ready for a Memorable Stay?</h2>
          <p className="text-white/60 text-lg mb-12">
            Book your room today and experience the best of Haridwar hospitality at Shoolin Suites Hotel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+919927511751"
              className="w-full sm:w-auto bg-white text-ink px-10 py-4 rounded-full font-bold hover:bg-gold hover:text-white transition-all"
            >
              CALL US NOW
            </a>
            <a
              href="https://wa.me/919927511751"
              className="w-full sm:w-auto bg-gold text-white px-10 py-4 rounded-full font-bold hover:bg-saffron transition-all shadow-xl shadow-gold/20"
            >
              WHATSAPP BOOKING
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
