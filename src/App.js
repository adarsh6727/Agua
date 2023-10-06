import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import About from './Components/About'
import ContactUs from "./Components/ContactUs"
import FAQ from './Components/FAQ';
import Book from './Components/Book';
import Navbar from './Components/Navbar';
// import Features from './Components/Features';
import QualityManagement from './Components/QualityManagement';
import AdvancedAutomation from './Components/AdvancedAutomation';
import OnlineMonitoring from './Components/OnlineMonitoring';
import LeakageDetection from './Components/LeakageDetection'




function App() {


  return (
    <BrowserRouter>
      <Navbar />
    


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/features" element={<Features />} /> */}
        <Route path="/onlineMonitoring" element={<OnlineMonitoring />} />
        <Route path="/advancedAutomation" element={< AdvancedAutomation />} />
        <Route path="/qualityManagement" element={<QualityManagement />} />
        <Route path="/leakageDetection" element={<LeakageDetection />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path='/contactus'element={<ContactUs/>}/>
        <Route path="/book" element={<Book/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
