// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaCalendar, FaClock, FaUser, FaStethoscope, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

// function BookAppointment() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [doctor, setDoctor] = useState(null);

//   // Mock doctor data - in a real app, this would come from an API
//   const doctors = [
//     {
//       id: 1,
//       name: 'Dr. Sarah Johnson',
//       specialty: 'Cardiologist',
//       rating: 4.8,
//       reviews: 124,
//       experience: '15 years',
//       location: 'New York',
//       availability: 'Available Today',
//       price: 150,
//       image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
//       expertise: ['Heart Disease', 'Hypertension', 'Cardiac Surgery'],
//       languages: ['English', 'Spanish'],
//       availableDates: ['2024-03-20', '2024-03-21', '2024-03-22'],
//       availableTimes: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
//     },
    
    
//     // ... (include all other doctors)
//   ];

//   useEffect(() => {
//     // Find the doctor based on the ID
//     const foundDoctor = doctors.find(d => d.id === parseInt(id));
//     if (foundDoctor) {
//       setDoctor(foundDoctor);
//     }
//   }, [id]);

//   const handleBooking = () => {
//     if (!selectedDate || !selectedTime) {
//       alert('Please select both date and time');
//       return;
//     }
    
//     // In a real app, you would make an API call here
//     navigate('/booking-confirmation', {
//       state: {
//         doctor,
//         appointmentDate: selectedDate,
//         appointmentTime: selectedTime
//       }
//     });
//   };

//   if (!doctor) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-xl text-gray-600">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold mb-8">Book Appointment</h1>

//           {/* Doctor Info Card */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//             <div className="flex items-start gap-6">
//               <img
//                 src={doctor.image}
//                 alt={doctor.name}
//                 className="w-32 h-32 rounded-lg object-cover"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
//                     <p className="text-gray-600 flex items-center mb-2">
//                       <FaStethoscope className="mr-2" />
//                       {doctor.specialty}
//                     </p>
//                     <p className="text-gray-600 flex items-center">
//                       <FaMapMarkerAlt className="mr-2" />
//                       {doctor.location}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <div className="flex items-center mb-2">
//                       <FaStar className="text-yellow-400 mr-1" />
//                       <span className="font-medium">{doctor.rating}</span>
//                       <span className="text-gray-500 text-sm ml-1">({doctor.reviews} reviews)</span>
//                     </div>
//                     <p className="text-primary font-medium">
//                       Consultation Fee: ${doctor.price}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Booking Form */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-xl font-semibold mb-6">Select Appointment Time</h3>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               {/* Date Selection */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <FaCalendar className="inline mr-2" />
//                   Select Date
//                 </label>
//                 <select
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   className="form-input w-full"
//                   required
//                 >
//                   <option value="">Choose a date</option>
//                   {doctor.availableDates.map((date) => (
//                     <option key={date} value={date}>
//                       {date}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Time Selection */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <FaClock className="inline mr-2" />
//                   Select Time
//                 </label>
//                 <select
//                   value={selectedTime}
//                   onChange={(e) => setSelectedTime(e.target.value)}
//                   className="form-input w-full"
//                   required
//                 >
//                   <option value="">Choose a time</option>
//                   {doctor.availableTimes.map((time) => (
//                     <option key={time} value={time}>
//                       {time}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex gap-4">
//               <button
//                 onClick={handleBooking}
//                 disabled={!selectedDate || !selectedTime}
//                 className="btn-primary flex-1 py-3"
//               >
//                 Confirm Booking
//               </button>
//               <button
//                 onClick={() => navigate(-1)}
//                 className="btn-outline flex-1 py-3"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookAppointment;









// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaCalendar, FaClock, FaStethoscope, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

// const doctors = [
//   {
//     id: 1,
//     name: 'Dr. Sarah Johnson',
//     specialty: 'Cardiologist',
//     rating: 4.8,
//     reviews: 124,
//     experience: '15 years',
//     location: 'New York',
//     availability: 'Available Today',
//     price: 150,
//     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
//     availableDates: ['2024-03-20', '2024-03-21', '2024-03-22'],
//     availableTimes: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
//   },
//   {
//     id: 2,
//     name: 'Dr. Michael Chen',
//     specialty: 'Pediatrician',
//     rating: 4.9,
//     reviews: 89,
//     experience: '12 years',
//     location: 'Los Angeles',
//     availability: 'Next Available: Tomorrow',
//     price: 120,
//     image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
//     availableDates: ['2024-03-21', '2024-03-22', '2024-03-23'],
//     availableTimes: ['10:00', '11:00', '12:00', '14:00', '15:00']
//   },
  
//   // Add remaining doctors here...
// ];

// function BookAppointment() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [doctor, setDoctor] = useState(null);

//   useEffect(() => {
//     const foundDoctor = doctors.find(d => d.id === parseInt(id));
//     if (foundDoctor) setDoctor(foundDoctor);
//   }, [id]);

//   const handleBooking = () => {
//     if (!selectedDate || !selectedTime) {
//       alert('Please select both date and time');
//       return;
//     }
//     navigate('/booking-confirmation', {
//       state: { doctor, appointmentDate: selectedDate, appointmentTime: selectedTime }
//     });
//   };

//   if (!doctor) return <p className="text-xl text-gray-600 text-center mt-10">Loading...</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <h1 className="text-3xl font-bold mb-8">Book Appointment</h1>
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-start gap-6">
//           <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-lg object-cover" />
//           <div className="flex-1">
//             <h2 className="text-2xl font-bold">{doctor.name}</h2>
//             <p className="text-gray-600 flex items-center"><FaStethoscope className="mr-2" />{doctor.specialty}</p>
//             <p className="text-gray-600 flex items-center"><FaMapMarkerAlt className="mr-2" />{doctor.location}</p>
//             <div className="flex items-center mt-2">
//               <FaStar className="text-yellow-400 mr-1" />
//               <span className="font-medium">{doctor.rating}</span>
//               <span className="text-gray-500 text-sm ml-1">({doctor.reviews} reviews)</span>
//             </div>
//             <p className="text-primary font-medium mt-2">Consultation Fee: ${doctor.price}</p>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-xl font-semibold mb-6">Select Appointment Time</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2"><FaCalendar className="inline mr-2" />Select Date</label>
//               <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="form-input w-full">
//                 <option value="">Choose a date</option>
//                 {doctor.availableDates.map(date => <option key={date} value={date}>{date}</option>)}
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2"><FaClock className="inline mr-2" />Select Time</label>
//               <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="form-input w-full">
//                 <option value="">Choose a time</option>
//                 {doctor.availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
//               </select>
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <button onClick={handleBooking} disabled={!selectedDate || !selectedTime} className="btn-primary flex-1 py-3">Confirm Booking</button>
//             <button onClick={() => navigate(-1)} className="btn-outline flex-1 py-3">Cancel</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookAppointment;












import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendar, FaClock, FaStethoscope, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const doctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', rating: 4.8, reviews: 124, experience: '15 years', location: 'New York', availability: 'Available Today', price: 150, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300', availableDates: ['2024-03-20', '2024-03-21', '2024-03-22'], availableTimes: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'] },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Pediatrician', rating: 4.9, reviews: 89, experience: '12 years', location: 'Los Angeles', availability: 'Next Available: Tomorrow', price: 120, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300', availableDates: ['2024-03-21', '2024-03-22', '2024-03-23'], availableTimes: ['10:00', '11:00', '12:00', '14:00', '15:00'] },
  { id: 3, name: 'Dr. Emily Rodriguez', specialty: 'Dermatologist', rating: 4.7, reviews: 98, experience: '10 years', location: 'San Francisco', availability: 'Available Today', price: 130, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300', availableDates: ['2024-03-22', '2024-03-23', '2024-03-24'], availableTimes: ['09:30', '11:30', '13:00', '15:30'] },
  { id: 4, name: 'Dr. James Wilson', specialty: 'Orthopedic Surgeon', rating: 4.8, reviews: 110, experience: '14 years', location: 'Chicago', availability: 'Next Available: Monday', price: 180, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300', availableDates: ['2024-03-25', '2024-03-26', '2024-03-27'], availableTimes: ['08:00', '10:00', '14:00', '16:00'] },
  { id: 5, name: 'Dr. Lisa Thompson', specialty: 'Neurologist', rating: 4.9, reviews: 150, experience: '18 years', location: 'Houston', availability: 'Available Today', price: 200, image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=300', availableDates: ['2024-03-20', '2024-03-21'], availableTimes: ['09:00', '12:00', '15:00'] },
  { id: 6, name: 'Dr. Robert Martinez', specialty: 'Psychiatrist', rating: 4.6, reviews: 80, experience: '9 years', location: 'Miami', availability: 'Next Available: Wednesday', price: 140, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300', availableDates: ['2024-03-27', '2024-03-28', '2024-03-29'], availableTimes: ['11:00', '13:00', '15:00'] },
  { id: 7, name: 'Dr. Jennifer Lee', specialty: 'Endocrinologist', rating: 4.8, reviews: 112, experience: '13 years', location: 'Seattle', availability: 'Available Today', price: 160, image: 'https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D', availableDates: ['2024-03-21', '2024-03-22'], availableTimes: ['10:30', '12:30', '14:30'] },
  { id: 8, name: 'Dr. David Anderson', specialty: 'Gynecologist', rating: 4.9, reviews: 125, experience: '16 years', location: 'Dallas', availability: 'Next Available: Friday', price: 175, image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D', availableDates: ['2024-03-22', '2024-03-23'], availableTimes: ['09:00', '11:00', '13:00'] },
  { id: 9, name: 'Dr. Shaurab', specialty: 'Ophthalmologist', rating: 4.7, reviews: 99, experience: '11 years', location: 'Boston', availability: 'Available Today', price: 145, image: 'https://plus.unsplash.com/premium_photo-1664476459351-59625a0fef11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D', availableDates: ['2024-03-20', '2024-03-21'], availableTimes: ['08:30', '10:30', '12:30'] },
  { id: 10, name: 'Dr. Nitesh', specialty: 'General Physician', rating: 4.8, reviews: 108, experience: '10 years', location: 'Philadelphia', availability: 'Next Available: Sunday', price: 100, image: 'https://plus.unsplash.com/premium_photo-1661631297261-7c27a49ed8dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZSUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D', availableDates: ['2024-03-24', '2024-03-25'], availableTimes: ['10:00', '12:00', '14:00'] }
];

function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const foundDoctor = doctors.find(d => d.id === parseInt(id));
    if (foundDoctor) setDoctor(foundDoctor);
  }, [id]);
  
  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time');
      return;
    }
    navigate('/booking-confirmation', {
      state: { doctor, appointmentDate: selectedDate, appointmentTime: selectedTime }
    });
  };

  if (!doctor) return <p className="text-xl text-gray-600 text-center mt-10">Loading...</p>;

  return (
        <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Book Appointment</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-start gap-6">
          <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-lg object-cover" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{doctor.name}</h2>
            <p className="text-gray-600 flex items-center"><FaStethoscope className="mr-2" />{doctor.specialty}</p>
            <p className="text-gray-600 flex items-center"><FaMapMarkerAlt className="mr-2" />{doctor.location}</p>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="font-medium">{doctor.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({doctor.reviews} reviews)</span>
            </div>
            <p className="text-primary font-medium mt-2">Consultation Fee: ${doctor.price}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-6">Select Appointment Time</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2"><FaCalendar className="inline mr-2" />Select Date</label>
              <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="form-input w-full">
                <option value="">Choose a date</option>
                {doctor.availableDates.map(date => <option key={date} value={date}>{date}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2"><FaClock className="inline mr-2" />Select Time</label>
              <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="form-input w-full">
                <option value="">Choose a time</option>
                                {doctor.availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={handleBooking} disabled={!selectedDate || !selectedTime} className="btn-primary flex-1 py-3">Confirm Booking</button>
            <button onClick={() => navigate(-1)} className="btn-outline flex-1 py-3">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;