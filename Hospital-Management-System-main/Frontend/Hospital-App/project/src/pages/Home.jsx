import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { FaSearch, FaUserMd, FaCalendarCheck, FaHospital, FaChevronDown, FaStar, FaAward, FaHeartbeat, FaUserFriends, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { useAuth } from '../hooks/useAuth';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const heroSlides = [
    {
      title: "Expert Healthcare at Your Fingertips",
      subtitle: "Connect with top doctors anytime, anywhere. Experience healthcare reimagined.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2000&h=1000",
      cta: "Book Now",
      highlight: "24/7 Available"
    },
    {
      title: "Your Health, Our Priority",
      subtitle: "Access to premium healthcare services with experienced professionals",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000&h=1000",
      cta: "Find Doctors",
      highlight: "Trusted by 1M+ Patients"
    },
    {
      title: "Personalized Care Journey",
      subtitle: "Tailored healthcare solutions with cutting-edge technology",
      image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&q=80&w=2000&h=1000",
      cta: "Get Started",
      highlight: "5000+ Specialists"
    }
  ];

  const specialties = [
    { id: 'cardiology', name: 'Cardiology', icon: FaHeartbeat },
    { id: 'pediatrics', name: 'Pediatrics', icon: FaUserFriends },
    { id: 'neurology', name: 'Neurology', icon: FaUserMd },
    { id: 'orthopedics', name: 'Orthopedics', icon: FaUserMd },
    { id: 'dermatology', name: 'Dermatology', icon: FaUserMd },
    { id: 'psychiatry', name: 'Psychiatry', icon: FaUserMd }
  ];

  const featuredDoctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.8,
      reviews: 124,
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
      badges: ['Top Rated', 'Quick Response']
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrician',
      rating: 4.9,
      reviews: 189,
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
      badges: ['Highly Recommended']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Neurologist',
      rating: 4.7,
      reviews: 156,
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300',
      badges: ['Expert']
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic',
      rating: 4.9,
      reviews: 201,
      experience: '18+ years',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300',
      badges: ['Award Winner']
    },
    {
      id: 5,
      name: 'Dr. Lisa Thompson',
      specialty: 'Dermatologist',
      rating: 4.9,
      reviews: 178,
      experience: '14+ years',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=300',
      badges: ['Skin Specialist', 'Cosmetic Expert']
    },
    {
      id: 6,
      name: 'Dr. Robert Martinez',
      specialty: 'Psychiatrist',
      rating: 4.8,
      reviews: 156,
      experience: '16+ years',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300',
      badges: ['Mental Health Expert']
    },
    {
      id: 7,
      name: 'Dr. Jennifer Lee',
      specialty: 'Pediatrician',
      rating: 4.9,
      reviews: 210,
      experience: '13+ years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
      badges: ['Child Specialist', 'Friendly Care']
    },
    {
      id: 8,
      name: 'Dr. David Anderson',
      specialty: 'Ophthalmologist',
      rating: 4.7,
      reviews: 145,
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
      badges: ['Eye Specialist']
    },
    {
      id: 9,
      name: 'Dr.Shaurab',
      specialty: 'Endocrinologist',
      rating: 4.8,
      reviews: 167,
      experience: '15+ years',
      image: 'https://plus.unsplash.com/premium_photo-1664476459351-59625a0fef11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D',
      badges: ['Diabetes Expert', 'Hormone Specialist']
    },
    {
      id: 10,
      name: 'Dr. Nitesh',
      specialty: 'Orthopedic Surgeon',
      rating: 4.9,
      reviews: 189,
      experience: '17+ years',
      image: 'https://plus.unsplash.com/premium_photo-1661631297261-7c27a49ed8dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZSUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D',
      badges: ['Joint Specialist', 'Sports Medicine']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
      text: "Outstanding service! The booking process was seamless, and Dr. Johnson provided excellent care.",
      rating: 5
    },
    {
      id: 2,
      name: "Emma Davis",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
      text: "Very professional platform. Found the perfect specialist for my needs within minutes.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Brown",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
      text: "The follow-up care and attention to detail were exceptional. Highly recommended!",
      rating: 5
    }
  ];

  const stats = [
    { icon: FaUserMd, count: '500+', label: 'Doctors' },
    { icon: FaUserFriends, count: '100K+', label: 'Happy Patients' },
    { icon: FaAward, count: '50+', label: 'Specialties' },
    { icon: FaHospital, count: '100+', label: 'Clinics' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section with Enhanced Carousel */}
      <section className="relative h-[600px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
                </div>
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="max-w-2xl text-white"
                    >
                      <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {slide.highlight}
                      </span>
                      <h1 className="text-5xl font-bold mb-4 leading-tight">{slide.title}</h1>
                      <p className="text-xl mb-8 text-gray-200">{slide.subtitle}</p>
                      <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
                        {slide.cta}
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Enhanced Search Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative transform -translate-y-24 bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Your Doctor</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search doctors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary-light transition-all"
                />
              </div>
              <select
                className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary-light transition-all"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                <option value="all">All Specialties</option>
                {specialties.map(specialty => (
                  <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
                ))}
              </select>
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                Search Doctors
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Specialties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of medical specialties and find the right doctor for your needs
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialties.map((specialty) => (
            <motion.div
              key={specialty.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition-all"
            >
              <specialty.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold">{specialty.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.count}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top-Rated Doctors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book appointments with the most experienced and highly-rated doctors in your area
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDoctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {doctor.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="bg-white px-3 py-1 rounded-full text-sm font-medium text-primary shadow-md"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">{doctor.name}</h3>
                <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mb-3">{doctor.experience}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({doctor.reviews})</span>
                  </div>
                  <Link
                    to={`/doctor/${doctor.id}`}
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/doctors"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
          >
            View All Doctors
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of our satisfied patients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-primary rounded-2xl text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have found their perfect healthcare match
          </p>
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;