import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Restaurant', path: '/restaurant' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'glass-morphism py-3 shadow-md' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className={cn(
            "text-2xl font-serif font-bold tracking-tighter transition-colors",
            isScrolled ? "text-ink" : "text-white"
          )}>
            SHOOLIN SUITES
          </span>
          <span className={cn(
            "text-[10px] uppercase tracking-[0.3em] font-medium",
            isScrolled ? "text-gold" : "text-gold/80"
          )}>
            Haridwar
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link",
                isScrolled ? "text-ink" : "text-white",
                location.pathname === link.path && "text-gold after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/919927511751"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-saffron text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-gold/20"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2", isScrolled ? "text-ink" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden border-t border-beige"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-beige",
                    location.pathname === link.path ? "text-gold" : "text-ink"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="tel:+919927511751"
                  className="flex items-center justify-center space-x-2 bg-beige text-ink py-3 rounded-xl font-medium"
                >
                  <Phone size={18} />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919927511751"
                  className="flex items-center justify-center space-x-2 bg-gold text-white py-3 rounded-xl font-medium"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
