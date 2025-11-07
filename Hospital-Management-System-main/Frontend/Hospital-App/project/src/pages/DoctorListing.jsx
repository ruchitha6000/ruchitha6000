import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaStar } from 'react-icons/fa';

function DoctorListing() {
  const [filters, setFilters] = useState({
    specialization: '',
    rating: '',
    availability: '',
    location: ''
  });

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.8,
      fee: 150,
      location: 'New York',
      availability: 'Available Today',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrician',
      rating: 4.9,
      fee: 120,
      location: 'Los Angeles',
      availability: 'Next Available: Tomorrow',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Neurologist',
      rating: 4.7,
      fee: 156,
      location: 'Chicago',
      availability: 'Available Today',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic',
      rating: 4.9,
      fee: 201,
      location: 'Houston',
      availability: 'Available Today',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 5,
      name: 'Dr. Lisa Thompson',
      specialty: 'Dermatologist',
      rating: 4.9,
      fee: 178,
      location: 'Miami',
      availability: 'Next Available: Tomorrow',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 6,
      name: 'Dr. Robert Martinez',
      specialty: 'Psychiatrist',
      rating: 4.8,
      reviews: 156,
      location: 'Seattle',
      availability: 'Available Today',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      id: 7,
      name: 'Dr. Jennifer Lee',
      specialty: 'Pediatrician',
      rating: 4.9,
      reviews: 210,
      location: 'Boston',
      availability: 'Available Today',
      image: 'https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 8,
      name: 'Dr. David Anderson',
      specialty: 'Ophthalmologist',
      rating: 4.7,
      fee: 145,
      location: 'San Francisco',
      availability: 'Next Available: Tomorrow',
      image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 9,
      name: 'Dr. Shaurab',
      specialty: 'Endocrinologist',
      rating: 4.8,
      fee: 167,
      location: 'Denver',
      availability: 'Available Today',
      image: 'https://plus.unsplash.com/premium_photo-1664476459351-59625a0fef11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 10,
      name: 'Dr. Nitesh',
      specialty: 'Orthopedic Surgeon',
      rating: 4.9,
      fee: 189,
      location: 'Phoenix',
      availability: 'Available Today',
      image: 'https://plus.unsplash.com/premium_photo-1661631297261-7c27a49ed8dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZSUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D'
    }
    // Add more doctors here
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit">
          <div className="flex items-center mb-6">
            <FaFilter className="text-primary mr-2" />
            <h2 className="text-xl font-semibold">Filters</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialization
              </label>
              <select
                value={filters.specialization}
                onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
                className="w-full p-2 border rounded-md"
              >
                <option value="">All Specializations</option>
                <option value="cardiology">Cardiology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="dermatology">Dermatology</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <select
                value={filters.rating}
                onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                className="w-full p-2 border rounded-md"
              >
                <option value="">All Ratings</option>
                <option value="4">4+ Stars</option>
                <option value="3">3+ Stars</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <select
                value={filters.availability}
                onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Any Time</option>
                <option value="today">Available Today</option>
                <option value="tomorrow">Available Tomorrow</option>
                <option value="week">This Week</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full p-2 border rounded-md"
              >
                <option value="">All Locations</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>
          </div>
        </div>

        {/* Doctor Listings */}
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{doctor.name}</h3>
                        <p className="text-gray-600">{doctor.specialty}</p>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span>{doctor.rating}</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-gray-600">
                        <span className="font-medium">Location:</span> {doctor.location}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Consultation Fee:</span> ${doctor.fee}
                      </p>
                      <p className="text-green-600">{doctor.availability}</p>
                    </div>
                    <div className="mt-4">
                      <Link
                        to={`/doctor/${doctor.id}`}
                        className="bg-primary text-white px-6 py-2 rounded-full inline-block hover:bg-opacity-90 transition"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorListing;