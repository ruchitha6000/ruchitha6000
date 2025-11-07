import { useState } from 'react';
import { FaCalendar, FaFileAlt, FaCog } from 'react-icons/fa';

function UserDashboard() {
  const [activeTab, setActiveTab] = useState('appointments');

  // Mock data
  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2024-03-20',
      time: '10:00 AM',
      status: 'upcoming'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Pediatrician',
      date: '2024-03-15',
      time: '2:30 PM',
      status: 'completed'
    }
  ];

  const medicalRecords = [
    {
      id: 1,
      type: 'Prescription',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-03-20',
      file: 'prescription_123.pdf'
    },
    {
      id: 2,
      type: 'Lab Report',
      doctor: 'Dr. Michael Chen',
      date: '2024-03-15',
      file: 'lab_report_456.pdf'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>

      {/* Dashboard Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          className={`px-6 py-3 font-medium ${
            activeTab === 'appointments'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-600 hover:text-primary'
          }`}
          onClick={() => setActiveTab('appointments')}
        >
          <FaCalendar className="inline mr-2" />
          Appointments
        </button>
        <button
          className={`px-6 py-3 font-medium ${
            activeTab === 'records'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-600 hover:text-primary'
          }`}
          onClick={() => setActiveTab('records')}
        >
          <FaFileAlt className="inline mr-2" />
          Medical Records
        </button>
        <button
          className={`px-6 py-3 font-medium ${
            activeTab === 'settings'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-600 hover:text-primary'
          }`}
          onClick={() => setActiveTab('settings')}
        >
          <FaCog className="inline mr-2" />
          Settings
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'appointments' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">My Appointments</h2>
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                  <p className="text-gray-600">{appointment.specialty}</p>
                  <div className="mt-2">
                    <p className="text-gray-600">
                      {appointment.date} at {appointment.time}
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      appointment.status === 'upcoming'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'records' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Medical Records</h2>
          {medicalRecords.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{record.type}</h3>
                  <p className="text-gray-600">Dr. {record.doctor}</p>
                  <p className="text-gray-600">{record.date}</p>
                </div>
                <button className="mt-4 md:mt-0 bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                defaultValue="Mahatma Gandhi "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                defaultValue="mahatmagandhi@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full p-2 border rounded-md"
                defaultValue="+91 000000000"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;