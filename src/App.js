import './App.css';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Home/Footer';
import { Routes, Route } from "react-router-dom";
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Navbar from './Components/Pages/Home/Navbar';

function App() {
  return (
    <div className='bg-slate-900'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
