// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be managed by your auth system

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="text-2xl font-bold text-primary flex items-center">
//             <span className="text-3xl mr-2">💊</span>
//             MedBook
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="nav-link">Home</Link>
//             <Link to="/doctors" className="nav-link">All Doctors</Link>
//             <Link to="/about" className="nav-link">About</Link>
//             <Link to="/contact" className="nav-link">Contact</Link>
            
//             {isLoggedIn ? (
//               <div className="relative group">
//                 <button className="flex items-center space-x-2 text-gray-600 hover:text-primary">
//                   <FaUser />
//                   <span>Account</span>
//                 </button>
//                 <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl hidden group-hover:block">
//                   <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
//                   <button 
//                     onClick={() => setIsLoggedIn(false)}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex items-center space-x-4">
//                 <Link to="/login" className="btn-outline">Login</Link>
//                 <Link to="/register" className="btn-primary">Register</Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-600"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 space-y-4">
//             <Link to="/" className="block nav-link">Home</Link>
//             <Link to="/doctors" className="block nav-link">All Doctors</Link>
//             <Link to="/about" className="block nav-link">About</Link>
//             <Link to="/contact" className="block nav-link">Contact</Link>
//             {isLoggedIn ? (
//               <>
//                 <Link to="/dashboard" className="block nav-link">Dashboard</Link>
//                 <button 
//                   onClick={() => setIsLoggedIn(false)}
//                   className="block w-full text-left nav-link"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <div className="space-y-2">
//                 <Link to="/login" className="block w-full btn-outline text-center">Login</Link>
//                 <Link to="/register" className="block w-full btn-primary text-center">Register</Link>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




import { useState } from 'react';
import { Menu, X, User, Home, Users, Info, Phone, LogOut, ChevronDown, Stethoscope, ChevronUp } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOptionsOpen, setIsProfileOptionsOpen] = useState(false);
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsProfileOptionsOpen(false);
    logout(() => {
      navigate('/login');
    })
  }
  
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                MedBook
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
              <Home className="w-4 h-4 mr-2" />
              Home
            </a>
            <a href="/doctors" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Doctors
            </a>
            <a href="/about" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
              <Info className="w-4 h-4 mr-2" />
              About
            </a>
            <a href="/contact" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </a>

            {token ? (
              <div className="relative group">
                <button onClick={() => setIsProfileOptionsOpen(val => !val)} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                  <User className="w-4 h-4" />
                  <span>{user.username}</span>
                  {isProfileOptionsOpen 
                    ? <ChevronUp className='w-4 h-4' />
                    : <ChevronDown className="w-4 h-4" />
                 }
                </button>
                {isProfileOptionsOpen && <div className="z-10 absolute right-0 w-48 mt-2 bg-white rounded-lg shadow-lg py-2 group-hover:visible transition-all group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-1">
                  <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Dashboard</a>
                  <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</a>
                  <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
                  <hr className="my-2 border-gray-100" />
                  <button 
                    onClick={handleLogout}
                    className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign out
                  </button>
                </div>}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <a href="/login" className="text-blue-600 hover:text-blue-700 px-4 py-2 text-sm font-medium transition-colors">
                  Sign in
                </a>
                <a href="/register" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Get started
                </a>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors">
              <Home className="w-5 h-5 mr-3" />
              Home
            </a>
            <a href="/doctors" className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors">
              <Users className="w-5 h-5 mr-3" />
              Doctors
            </a>
            <a href="/about" className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors">
              <Info className="w-5 h-5 mr-3" />
              About
            </a>
            <a href="/contact" className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors">
              <Phone className="w-5 h-5 mr-3" />
              Contact
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-100">
            {token ? (
              <div className="px-2 space-y-1">
                <a href="/dashboard" className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors">
                  Dashboard
                </a>
                <a href="/profile" className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors">
                  Profile
                </a>
                <a href="/settings" className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors">
                  Settings
                </a>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Sign out
                </button>
              </div>
            ) : (
              <div className="px-2 space-y-2">
                <a href="/login" className="flex justify-center items-center text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors">
                  Sign in
                </a>
                <a href="/register" className="flex justify-center items-center bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition-colors">
                  Get started
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;