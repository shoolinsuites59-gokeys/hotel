import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Utensils, Coffee, Clock, Star, ChevronRight } from 'lucide-react';

const menuCategories = [
  {
    name: 'Breakfast Specialties',
    items: [
      { name: 'Puri Bhaji', price: '₹149', desc: 'Traditional Haridwar style puri with spicy potato curry.' },
      { name: 'Stuffed Paratha', price: '₹129', desc: 'Choice of Aloo, Paneer or Gobi served with curd and pickle.' },
      { name: 'Cholle Bhature', price: '₹149', desc: 'Best North India Breakfast, Served with Cholle.' },
    ]
  },
  {
    name: 'Main Course (Indian)',
    items: [
      { name: 'Paneer Butter Masala', price: '₹289', desc: 'Cottage cheese cubes in rich tomato gravy.' },
      { name: 'Dal Makhani', price: '₹249', desc: 'Slow-cooked black lentils with cream and butter.' },
      { name: 'Mix Vegetable', price: '₹219', desc: 'Seasonal vegetables cooked in traditional spices.' },
    ]
  },
  {
    name: 'Chinese & Continental',
    items: [
      { name: 'Veg Manchurian', price: '₹229', desc: 'Crispy veg balls in spicy soya garlic sauce.' },
      { name: 'Hakka Noodles', price: '₹199', desc: 'Stir-fried noodles with crunchy vegetables.' },
      { name: 'Veg Club Sandwich', price: '₹179', desc: 'Triple-layered sandwich with fresh veggies and cheese.' },
    ]
  }
];

export default function Restaurant() {

  useEffect(() => {
    document.title = "Restaurant in Haridwar | Shoolin Suites Hotel";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Enjoy delicious multi-cuisine vegetarian food at Shoolin Suites Hotel Haridwar. Best in-house restaurant near Bhupatwala serving Indian, Chinese and Continental dishes."
      );
    }
  }, []);

  return (
    <>

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920"
            alt="Restaurant Header"
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
            Dining Experience
          </motion.h1>
          <p className="text-gold uppercase tracking-[0.4em] font-semibold text-sm">
            A Feast for the Senses
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-ink leading-tight">
              Savor the <span className="text-gold italic">Flavors of Haridwar</span>
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed">
              Our in-house multi-cuisine restaurant offers a delightful culinary journey. We take pride in serving fresh, hygienically prepared vegetarian meals that cater to diverse palates.
            </p>
            <p className="text-ink/70 text-lg leading-relaxed">
              Whether you are craving traditional North Indian delicacies, spicy Chinese, or comforting Continental dishes, our expert chefs ensure every meal is a memorable experience.
            </p>
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="font-bold text-sm uppercase tracking-widest text-ink/40">Open Hours</div>
                  <div className="font-bold text-ink">7:00 AM - 11:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <Utensils size={24} />
                </div>
                <div>
                  <div className="font-bold text-sm uppercase tracking-widest text-ink/40">Cuisine</div>
                  <div className="font-bold text-ink">Multi-cuisine Veg</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400"
              alt="Food 1"
              className="rounded-2xl shadow-lg aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400"
              alt="Food 2"
              className="rounded-2xl shadow-lg aspect-square object-cover translate-y-8"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Sample Menu</h2>
            <p className="text-ink/60">A glimpse into our culinary offerings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {menuCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-xl"
              >
                <h3 className="text-2xl font-serif font-bold text-gold mb-10 border-b border-beige pb-4">
                  {category.name}
                </h3>
                <div className="space-y-8">
                  {category.items.map((item, j) => (
                    <div key={j} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-ink">{item.name}</h4>
                        <div className="text-gold font-bold">{item.price}</div>
                      </div>
                      <p className="text-xs text-ink/40 italic leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Area Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Dining Area</h2>
            <p className="text-ink/60">Elegantly designed space for a peaceful dining experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600',
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl shadow-lg h-64"
              >
                <img
                  src={img}
                  alt={`Dining Area ${i + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
