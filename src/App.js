import './App.css';
import Home from './Components/Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Navbar from './Components/Pages/Home/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
