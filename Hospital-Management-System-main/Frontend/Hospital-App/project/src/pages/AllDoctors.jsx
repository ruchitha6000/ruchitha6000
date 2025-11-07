import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaFilter, FaSearch, FaMapMarkerAlt, FaStethoscope } from 'react-icons/fa';

function AllDoctors() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    specialization: '',
    location: '',
    rating: '',
    availability: '',
    priceRange: '',
  });

  const [doctors] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.8,
      reviews: 124,
      experience: '15 years',
      location: 'New York',
      availability: 'Available Today',
      price: 150,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrician',
      rating: 4.9,
      reviews: 89,
      experience: '12 years',
      location: 'Los Angeles',
      availability: 'Next Available: Tomorrow',
      price: 120,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Neurologist',
      rating: 4.7,
      reviews: 156,
      experience: '10 years',
      location: 'Chicago',
      availability: 'Available Today',
      price: 180,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic',
      rating: 4.9,
      reviews: 201,
      experience: '18 years',
      location: 'Houston',
      availability: 'Available Today',
      price: 200,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 5,
      name: 'Dr. Lisa Thompson',
      specialty: 'Dermatologist',
      rating: 4.9,
      reviews: 178,
      experience: '14 years',
      location: 'Miami',
      availability: 'Next Available: Tomorrow',
      price: 160,
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 6,
      name: 'Dr. Robert Martinez',
      specialty: 'Psychiatrist',
      rating: 4.8,
      reviews: 156,
      experience: '16 years',
      location: 'Seattle',
      availability: 'Available Today',
      price: 190,
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 7,
      name: 'Dr. Jennifer Lee',
      specialty: 'Pediatrician',
      rating: 4.9,
      reviews: 210,
      experience: '13 years',
      location: 'Boston',
      availability: 'Available Today',
      price: 130,
      image: 'https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 8,
      name: 'Dr. David Anderson',
      specialty: 'Ophthalmologist',
      rating: 4.7,
      reviews: 145,
      experience: '12 years',
      location: 'San Francisco',
      availability: 'Next Available: Tomorrow',
      price: 170,
      image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 9,
      name: 'Dr. Shaurab',
      specialty: 'Endocrinologist',
      rating: 4.8,
      reviews: 167,
      experience: '15 years',
      location: 'Denver',
      availability: 'Available Today',
      price: 175,
      image: 'https://plus.unsplash.com/premium_photo-1664476459351-59625a0fef11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 10,
      name: 'Dr. Nitesh',
      specialty: 'Orthopedic Surgeon',
      rating: 4.9,
      reviews: 189,
      experience: '17 years',
      location: 'Phoenix',
      availability: 'Available Today',
      price: 210,
      image: 'https://plus.unsplash.com/premium_photo-1661631297261-7c27a49ed8dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZSUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D'
    }
  ]);

  const specializations = [
    'All Specializations',
    'Cardiologist',
    'Pediatrician',
    'Orthopedic',
    'Dermatologist',
    'Psychiatrist',
    'Ophthalmologist',
    'Endocrinologist'
  ];

  const locations = [
    'All Locations',
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Miami',
    'Seattle',
    'Boston',
    'San Francisco',
    'Denver',
    'Phoenix'
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDoctorClick = (doctorId) => {
    navigate(`/doctor/${doctorId}`);
  };

  const handleBookAppointment = (doctorId, event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(`/book-appointment/${doctorId}`);
  };

  const filteredDoctors = doctors.filter(doctor => {
    if (filters.specialization && filters.specialization !== 'All Specializations' && 
        doctor.specialty !== filters.specialization) return false;
    if (filters.location && filters.location !== 'All Locations' && 
        doctor.location !== filters.location) return false;
    if (filters.rating && doctor.rating < parseFloat(filters.rating)) return false;
    if (searchQuery && !doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Search and Filter Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Find Your Doctor</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name, specialty..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                name="specialization"
                className="form-input"
                value={filters.specialization}
                onChange={handleFilterChange}
              >
                {specializations.map((spec, index) => (
                  <option key={index} value={spec}>{spec}</option>
                ))}
              </select>
              <select
                name="location"
                className="form-input"
                value={filters.location}
                onChange={handleFilterChange}
              >
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div 
              key={doctor.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleDoctorClick(doctor.id)}
            >
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-primary">
                  {doctor.availability}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-gray-600 flex items-center">
                      <FaStethoscope className="mr-2" />
                      {doctor.specialty}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({doctor.reviews})</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    {doctor.location}
                  </p>
                  <p className="text-gray-600">Experience: {doctor.experience}</p>
                  <p className="text-primary font-medium">Consultation Fee: ${doctor.price}</p>
                </div>

                <div className="flex gap-4">
                <button
  onClick={(e) => handleBookAppointment(doctor.id, e)}
  className="flex-1 text-center rounded-full px-4 py-2 
             bg-gradient-to-r from-blue-500 to-indigo-600 
             text-white text-sm font-medium shadow-md 
             transition-all duration-300 ease-in-out 
             hover:from-indigo-600 hover:to-blue-500 
             hover:shadow-lg hover:scale-105"
>
  Book Appointment
</button>

<button
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/doctor/${doctor.id}`);
  }}
  className="flex-1 text-center rounded-full px-4 py-2 
             border border-indigo-500 text-indigo-500 text-sm font-medium 
             transition-all duration-300 ease-in-out 
             hover:bg-indigo-500 hover:text-white 
             hover:shadow-md hover:scale-105"
>
  View Profile
</button>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <FaSearch className="mx-auto text-4xl text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No doctors found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllDoctors;