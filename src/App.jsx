import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import LanguageToggle from './Context/LanguageToggle';
import { LanguageProvider } from './Context/LanguageContext';

import Home from './Components/Home';
import PrayerTime from './Components/PrayerTime';
import About from './Components/About';
import SurahSection from './Components/SurahSection';
import PrayerTracker from './Components/PrayerTracker';
import DuaSection from './Components/DuaSection';
import Settings from './Components/Settings';
import Calendar from './Components/Calendar';
import IslamicQASection from './Components/IslamicQASection';
import Privacy from './Components/Privacy';
import IslamicArticlesPage from './Components/Articles';
import InteractiveIslamicPage from './Components/Interactive';
import IslamicLibraryPage from './Components/IslamicLibraryPage';


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
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/islamic-qa" element={<IslamicQASection />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/articles" element={<IslamicArticlesPage />} />
              <Route path="/interactive" element={<InteractiveIslamicPage />} />
              <Route path="/library" element={<IslamicLibraryPage />} />
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
