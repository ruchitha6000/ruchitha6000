import { Link } from 'react-router-dom';
import { FaCheckCircle, FaCalendar, FaClock, FaUser, FaCreditCard } from 'react-icons/fa';

function BookingConfirmation() {
  // Mock booking data
  const booking = {
    id: 'BK123456',
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: '2024-03-20',
    time: '10:00 AM',
    fee: 150
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Success Message */}
          <div className="text-center mb-8">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
            <p className="text-gray-600">
              Your appointment has been successfully scheduled.
            </p>
          </div>

          {/* Booking Details */}
          <div className="border-t border-b border-gray-200 py-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaUser className="text-primary w-5 h-5 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Doctor</p>
                  <p className="font-medium">{booking.doctor}</p>
                  <p className="text-sm text-gray-600">{booking.specialty}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaCalendar className="text-primary w-5 h-5 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-medium">{booking.date}</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaClock className="text-primary w-5 h-5 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Time</p>
                  <p className="font-medium">{booking.time}</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaCreditCard className="text-primary w-5 h-5 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Consultation Fee</p>
                  <p className="font-medium">${booking.fee}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking ID */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600">Booking Reference</p>
            <p className="font-mono font-medium text-lg">{booking.id}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition text-center"
            >
              Go to Dashboard
            </Link>
            <button
              onClick={() => window.print()}
              className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition"
            >
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;

