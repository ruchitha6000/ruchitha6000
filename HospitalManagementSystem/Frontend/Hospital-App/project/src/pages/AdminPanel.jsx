import { useState } from 'react';
import { FaUserMd, FaCalendar, FaUsers, FaChartBar } from 'react-icons/fa';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data
  const stats = {
    totalAppointments: 150,
    totalDoctors: 25,
    totalPatients: 500,
    revenue: 15000
  };

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      patients: 120,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrician',
      patients: 150,
      rating: 4.9
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <FaCalendar className="text-primary text-3xl mr-4" />
            <div>
              <p className="text-gray-600">Total Appointments</p>
              <p className="text-2xl font-bold">{stats.totalAppointments}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <FaUserMd className="text-primary text-3xl mr-4" />
            <div>
              <p className="text-gray-600">Total Doctors</p>
              <p className="text-2xl font-bold">{stats.totalDoctors}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <FaUsers className="text-primary text-3xl mr-4" />
            <div>
              <p className="text-gray-600">Total Patients</p>
              <p className="text-2xl font-bold">{stats.totalPatients}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <FaChartBar className="text-primary text-3xl mr-4" />
            <div>
              <p className="text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold">${stats.revenue}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Management */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Manage Doctors</h2>
          <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition">
            Add New Doctor
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specialty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patients
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{doctor.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{doctor.specialty}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{doctor.patients}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{doctor.rating}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-primary hover:text-opacity-80 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-opacity-80">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;