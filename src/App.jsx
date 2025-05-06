import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DuaSection from './Components/DuaSection';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PrayerTime from './Components/PrayerTime';
import PrayerTracker from './Components/PrayerTracker';
import SurahSection from './Components/SurahSection';
import About from './Components/About';
import { LanguageProvider } from './Context/LanguageContext';
import LanguageToggle from './Context/LanguageToggle';
import Home from './Components/Home';
import Settings from './Components/Settings';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prayer" element={<PrayerTime />} />
              <Route path="/about" element={<About />} />
              <Route path="/surah" element={<SurahSection />} />
              <Route path="/tracker" element={<PrayerTracker />} />
              <Route path="/dua" element={<DuaSection />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
          <div className="p-4 flex justify-center">
            <LanguageToggle />
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
