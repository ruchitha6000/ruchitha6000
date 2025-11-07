import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllDoctors from './pages/AllDoctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import DoctorProfile from './pages/DoctorProfile';
import BookAppointment from './pages/BookAppointment';
import BookingConfirmation from './pages/BookingConfirmation';
import UserDashboard from './pages/UserDashboard';
import AdminPanel from './pages/AdminPanel';
import AlertPopup from './components/Popup';
import { useAuth } from './hooks/useAuth';
import NotFound from './pages/NotFound';

function App() {
  const { user, token } = useAuth();
  return (
    <Router>
      <AlertPopup></AlertPopup>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />}/>
            {!token && [
              <Route key={1} path="/login" element={<Login />} />,
              <Route key={2} path="/register" element={<Register />} />
            ]}

            {token && [
              <Route path="/dashboard" element={<UserDashboard />} />
            ]}
            
            <Route path="/doctors" element={<AllDoctors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/book-appointment/:id" element={<BookAppointment />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;