import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import About from './Components/About'
import ContactUs from "./Components/ContactUs"
import FAQ from './Components/FAQ';
import Book from './Components/Book';
import NavbarComponent from './Components/Navbar';
import QualityManagement from './Components/QualityManagement';
import AdvancedAutomation from './Components/AdvancedAutomation';
import OnlineMonitoring from './Components/OnlineMonitoring';
import LeakageDetection from './Components/LeakageDetection'
import ProductCatalog from './Components/ProductCatalog';
import ScrollToTop from "react-scroll-to-top";




function App() {


  return (


    <BrowserRouter>
      <NavbarComponent />




      <Routes >
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/onlineMonitoring" element={<OnlineMonitoring />} />
        <Route path="/advancedAutomation" element={< AdvancedAutomation />} />
        <Route path="/qualityManagement" element={<QualityManagement />} />
        <Route path="/leakageDetection" element={<LeakageDetection />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path="/book" element={<Book />} />
        <Route path='/ProductCatalog' element={<ProductCatalog />} />

      </Routes>

      <ScrollToTop smooth className='bg-black rounded-pill shadow d-flex align-items-center justify-content-center' style={{ width: '30px', height: '30px', lineHeight: '30px' }} width='15' color='white' />
    </BrowserRouter>

  );
}

export default App;
