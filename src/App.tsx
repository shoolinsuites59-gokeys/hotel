import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Restaurant from './pages/Restaurant'
import Contact from './pages/Contact'

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Shoolin Suites Hotel Haridwar",
  "description": "Premium 3-star standard hotel near Bhupatwala and Dudadhari Chowk in Haridwar.",
  "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Bhupatwala, Dudadhari Chowk",
    "addressLocality": "Haridwar",
    "addressRegion": "Uttarakhand",
    "postalCode": "249401",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.968,
    "longitude": 78.164
  },
  "url": "https://Shoolinsuites.com",
  "telephone": "+910000000000",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "3"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true }
  ]
}

export default function App() {

  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.innerHTML = JSON.stringify(hotelSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}