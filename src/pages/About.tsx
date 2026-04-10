import { motion } from 'motion/react';
import { Target, Eye, CheckCircle2, MapPin } from 'lucide-react';
import { useEffect } from 'react';

const attractions = [
  { name: 'Har Ki Pauri', dist: '2.5 km', image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&q=80&w=600' },
  { name: 'Mansa Devi Temple', dist: '3.0 km', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=600' },
  { name: 'Chandi Devi Temple', dist: '4.5 km', image: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc6f9d?auto=format&fit=crop&q=80&w=600' },
  { name: 'Ganga Ghat', dist: '1.0 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600' },
];

export default function About() {

  useEffect(() => {
    document.title = "About Us | Shoolin Suites Hotel Haridwar";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about the story, vision, and mission of Shoolin Suites Hotel Haridwar. Discover why we are the preferred 3 star hotel near Bhupatwala and Dudadhari Chowk."
      );
    }
  }, []);
      return(
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1920"
            alt="About Header"
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
            Our Story
          </motion.h1>
          <p className="text-gold uppercase tracking-[0.4em] font-semibold text-sm">
            Hospitality with a Spiritual Soul
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-ink leading-tight">
                A Legacy of <span className="text-gold italic">Excellence</span> in Haridwar
              </h2>
              <p className="text-ink/70 text-lg leading-relaxed">
                Founded with a vision to provide a comfortable and spiritual retreat for pilgrims and travelers, Shoolin Suites Hotel has become a landmark of hospitality in Haridwar. Our journey began with a simple goal: to offer a home away from home where every guest feels like family.
              </p>
              <p className="text-ink/70 text-lg leading-relaxed">
                Located near the historic Dudadhari Chowk, we have witnessed the city's transformation while maintaining our commitment to traditional values and modern comfort.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-4xl font-serif font-bold text-gold mb-2">10+</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-ink/40">Years of Service</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-gold mb-2">50k+</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-ink/40">Happy Guests</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80&w=800"
                alt="Hotel Interior"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full -z-10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-12 bg-white rounded-3xl shadow-xl space-y-6"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold">Our Mission</h3>
            <p className="text-ink/60 leading-relaxed">
              To provide exceptional hospitality services that exceed guest expectations by combining modern luxury with the spiritual essence of Haridwar.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-12 bg-white rounded-3xl shadow-xl space-y-6"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold">Our Vision</h3>
            <p className="text-ink/60 leading-relaxed">
              To be the most preferred 3-star hotel in Haridwar, recognized for our commitment to quality, cleanliness, and personalized guest experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Why Choose Us?</h2>
            <p className="text-ink/60">The reasons why our guests keep coming back.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Prime Location', desc: 'Easy access to major temples and ghats.' },
              { title: 'Modern Rooms', desc: 'Elegantly furnished with all amenities.' },
              { title: 'Expert Staff', desc: 'Professional and courteous service 24/7.' },
              { title: 'Value for Money', desc: 'Premium experience at affordable rates.' },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Nearby Attractions</h2>
            <p className="text-ink/60">Explore the spiritual wonders of Haridwar near our hotel.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {attractions.map((place, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="group relative h-80 overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-1">{place.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <MapPin size={12} className="text-gold" />
                    {place.dist} from Hotel
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
