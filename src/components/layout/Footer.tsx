import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Description */}
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-tighter text-gold">
              Shoolin SUITES
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">
              Haridwar
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Experience the perfect blend of spiritual serenity and modern luxury at Shoolin Suites. Located in the heart of Haridwar, we offer a peaceful retreat for pilgrims and travelers alike.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6 text-gold">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/rooms" className="hover:text-gold transition-colors">Rooms & Suites</Link></li>
            <li><Link to="/restaurant" className="hover:text-gold transition-colors">Dining</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6 text-gold">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0 mt-1" />
              <span>Near Bhupatwala, Dudadhari Chowk, Haridwar, Uttarakhand, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+91 99275 11751, 90127 19659</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>shoolinsuites59@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-serif font-bold mb-6 text-gold">Newsletter</h4>
          <p className="text-sm text-white/60 mb-4">Subscribe to get special offers and updates.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button className="bg-gold hover:bg-saffron text-white py-3 rounded-lg text-sm font-bold transition-all">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Shoolin Suites Hotel Haridwar. All rights reserved.
        </p>
        <p className="text-xs text-white/40">
          Designed with ❤️ for Haridwar
        </p>
      </div>
    </footer>
  );
}
