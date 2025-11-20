import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Collection from './components/Collection';
import Purpose from './components/Purpose';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Collection />
      <Features />
      <Purpose />
      <Footer />
    </div>
  )
}

export default App
