import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar1 from './components/navbar/Navbar1';
import Diet from './Diet'; 
import About from './components/About';
import Workout from './components/Workout';
import Contact from './components/Contact';
import Landing from './components/landingpage/Landing';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const userData = localStorage.getItem('userData');
  return (
    <>
      <BrowserRouter>
        <div>
          {!userData && <Navbar1 />}
          <Routes>
            <Route path="/" element={userData ? <Landing /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/diet" element={<Diet />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={1000} pauseOnHover={false} />
        </div>
      </BrowserRouter>
      </>
  );
}

export default App;



