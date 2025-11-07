// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { FaStar, FaCalendar, FaClock } from 'react-icons/fa';

// function DoctorProfile() {
//   const { id } = useParams();
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');

//   // Mock doctor data
//   const doctor = {
//     id: 1,
//     name: 'Dr. Sarah Johnson',
//     specialty: 'Cardiologist',
//     rating: 4.8,
//     experience: '15+ years',
//     patients: '10,000+',
//     education: 'MD - Cardiology, MBBS',
//     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
//     bio: 'Dr. Sarah Johnson is a renowned cardiologist with over 15 years of experience in treating various heart conditions. She specializes in preventive cardiology and heart failure management.',
//     availability: {
//       dates: ['2024-03-20', '2024-03-21', '2024-03-22'],
//       times: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']


//     }
//   };

//   const handleBooking = () => {
//     // Handle booking logic
//     console.log('Booking appointment for:', selectedDate, selectedTime);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         {/* Doctor Header */}
//         <div className="bg-primary text-white p-8">
//           <div className="flex flex-col md:flex-row gap-8 items-center">
//             <img
//               src={doctor.image}
//               alt={doctor.name}
//               className="w-48 h-48 rounded-full object-cover border-4 border-white"
//             />
//             <div>
//               <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
//               <p className="text-xl mb-4">{doctor.specialty}</p>
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center">
//                   <FaStar className="text-yellow-400 mr-1" />
//                   <span>{doctor.rating} Rating</span>
//                 </div>
//                 <span>•</span>
//                 <span>{doctor.experience} Experience</span>
//                 <span>•</span>
//                 <span>{doctor.patients} Patients</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="p-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* About Section */}
//             <div className="md:col-span-2">
//               <h2 className="text-2xl font-bold mb-4">About</h2>
//               <p className="text-gray-600 mb-6">{doctor.bio}</p>

//               <h3 className="text-xl font-semibold mb-3">Education</h3>
//               <p className="text-gray-600 mb-6">{doctor.education}</p>

//               {/* Reviews Section */}
//               <h2 className="text-2xl font-bold mb-4">Patient Reviews</h2>
//               <div className="space-y-4">
//                 {/* Add review components here */}
//               </div>
//             </div>

//             {/* Booking Section */}
//             <div className="bg-gray-50 p-6 rounded-lg">
//               <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
              
//               {/* Date Selection */}
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <FaCalendar className="inline mr-2" />
//                   Select Date
//                 </label>
//                 <select
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   className="w-full p-2 border rounded-md"
//                 >
//                   <option value="">Choose a date</option>
//                   {doctor.availability.dates.map((date) => (
//                     <option key={date} value={date}>
//                       {date}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Time Selection */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <FaClock className="inline mr-2" />
//                   Select Time
//                 </label>
//                 <select
//                   value={selectedTime}
//                   onChange={(e) => setSelectedTime(e.target.value)}
//                   className="w-full p-2 border rounded-md"
//                 >
//                   <option value="">Choose a time</option>
//                   {doctor.availability.times.map((time) => (
//                     <option key={time} value={time}>
//                       {time}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <button
//                 onClick={handleBooking}
//                 disabled={!selectedDate || !selectedTime}
//                 className="w-full bg-primary text-white py-3 rounded-full hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Book Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DoctorProfile;






import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaCalendar, FaClock } from "react-icons/fa";

// Mock data (Replace this with an API call if needed)
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.8,
    experience: "15+ years",
    patients: "10,000+",
    education: "MD - Cardiology, MBBS",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. Sarah Johnson is a renowned cardiologist with over 15 years of experience...",
    availability: {
      dates: ["2024-03-20", "2024-03-21", "2024-03-22"],
      times: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
    },
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Pediatrician",
    rating: 4.9,
    experience: "12 years",
    patients: "8,000+",
    education: "MD - Pediatrics, MBBS",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. Michael Chen specializes in child healthcare and has successfully treated...",
    availability: {
      dates: ["2024-03-21", "2024-03-22"],
      times: ["10:00", "11:00", "12:00", "14:00", "15:00"],
    },
  },

  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Neurologist",
    rating: 4.7,
    experience: "10 years",
    patients: "6,500+",
    education: "MD - Neurology, MBBS",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. Emily Rodriguez is an experienced neurologist specializing in treating neurological disorders such as epilepsy, migraines, and multiple sclerosis.",
    availability: {
      dates: ["2024-03-21", "2024-03-22"],
      times: ["09:00", "11:00", "13:00", "15:00", "17:00"],
    },
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedic",
    rating: 4.9,
    experience: "18 years",
    patients: "10,000+",
    education: "MS - Orthopedics, MBBS",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. James Wilson is a leading orthopedic specialist with expertise in treating bone fractures, joint problems, and sports injuries.",
    availability: {
      dates: ["2024-03-21", "2024-03-22"],
      times: ["08:00", "10:00", "12:00", "14:00", "16:00"],
    },
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Dermatologist",
    rating: 4.9,
    experience: "14 years",
    patients: "7,500+",
    education: "MD - Dermatology, MBBS",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. Lisa Thompson is a board-certified dermatologist specializing in skin health, acne treatment, and cosmetic dermatology.",
    availability: {
      dates: ["2024-03-22", "2024-03-23"],
      times: ["10:00", "12:00", "14:00", "16:00", "18:00"],
    },
  },
  {
    id: 6,
    name: "Dr. Robert Martinez",
    specialty: "Psychiatrist",
    rating: 4.8,
    experience: "16 years",
    patients: "8,200+",
    education: "MD - Psychiatry, MBBS",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. Robert Martinez is a compassionate psychiatrist who helps patients manage mental health issues, including anxiety and depression.",
    availability: {
      dates: ["2024-03-21", "2024-03-22"],
      times: ["09:00", "11:00", "13:00", "15:00", "17:00"],
    },
  },
  {
    id: 7,
    name: "Dr. Jennifer Lee",
    specialty: "Pediatrician",
    rating: 4.9,
    experience: "13 years",
    patients: "9,000+",
    education: "MD - Pediatrics, MBBS",
    image: "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=600&auto=format&fit=crop&q=60",
    bio: "Dr. Jennifer Lee is a dedicated pediatrician specializing in child healthcare, ensuring the best treatment for newborns and young children.",
    availability: {
      dates: ["2024-03-21", "2024-03-22"],
      times: ["10:00", "11:00", "13:00", "15:00"],
    },
  },
  {
    id: 8,
    name: "Dr. David Anderson",
    specialty: "Ophthalmologist",
    rating: 4.7,
    experience: "12 years",
    patients: "7,300+",
    education: "MD - Ophthalmology, MBBS",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=600&auto=format&fit=crop&q=60",
    bio: "Dr. David Anderson is an expert ophthalmologist focusing on vision correction, cataract surgeries, and eye health.",
    availability: {
      dates: ["2024-03-22", "2024-03-23"],
      times: ["09:00", "11:00", "13:00", "15:00", "17:00"],
    },
  },
  {
    id: 9,
    name: "Dr. Shaurab",
    specialty: "Endocrinologist",
    rating: 4.8,
    experience: "15 years",
    patients: "8,500+",
    education: "MD - Endocrinology, MBBS",
    image: "https://plus.unsplash.com/premium_photo-1664476459351-59625a0fef11?w=600&auto=format&fit=crop&q=60",
    bio: "Dr. Shaurab specializes in treating hormonal disorders, diabetes management, and thyroid conditions with a patient-centric approach.",
    availability: {
      dates: ["2024-03-21", "2024-03-22"],
      times: ["10:00", "12:00", "14:00", "16:00"],
    },
  },
  {
    id: 10,
    name: "Dr. Nitesh",
    specialty: "Orthopedic Surgeon",
    rating: 4.9,
    experience: "17 years",
    patients: "9,200+",
    education: "MS - Orthopedic Surgery, MBBS",
    image: "https://plus.unsplash.com/premium_photo-1661631297261-7c27a49ed8dc?w=600&auto=format&fit=crop&q=60",
    bio: "Dr. Nitesh is a highly skilled orthopedic surgeon specializing in joint replacements, spine surgeries, and bone reconstruction.",
    availability: {
      dates: ["2024-03-21", "2024-03-22"],
      times: ["08:00", "10:00", "12:00", "14:00", "16:00"],
    },
  },
  

  // Add other doctors here...
];

function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-2xl font-bold text-red-500">
          Doctor Not Found
        </h2>
      </div>
    );
  }

  const handleBooking = () => {
    console.log("Booking appointment for:", selectedDate, selectedTime);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-primary text-white p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-48 h-48 rounded-full object-cover border-4 border-white"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-xl mb-4">{doctor.specialty}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>{doctor.rating} Rating</span>
                </div>
                <span>•</span>
                <span>{doctor.experience} Experience</span>
                <span>•</span>
                <span>{doctor.patients} Patients</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-600 mb-6">{doctor.bio}</p>

              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600 mb-6">{doctor.education}</p>

              <h2 className="text-2xl font-bold mb-4">Patient Reviews</h2>
              <div className="space-y-4">{/* Add reviews here */}</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Book Appointment</h2>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaCalendar className="inline mr-2" />
                  Select Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Choose a date</option>
                  {doctor.availability.dates.map((date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaClock className="inline mr-2" />
                  Select Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Choose a time</option>
                  {doctor.availability.times.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-primary text-white py-3 rounded-full hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
