// import { useState } from 'react';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactInfo = [
//     {
//       icon: FaPhone,
//       title: 'Phone',
//       details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
//     },
//     {
//       icon: FaEnvelope,
//       title: 'Email',
//       details: ['support@medbook.com', 'info@medbook.com'],
//     },
//     {
//       icon: FaMapMarkerAlt,
//       title: 'Location',
//       details: ['123 Healthcare Ave', 'Medical District, NY 10001'],
//     },
//     {
//       icon: FaClock,
//       title: 'Working Hours',
//       details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 9AM - 2PM'],
//     },
//   ];

//   return (
//     <div className="py-12">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
//           <p className="text-gray-600">
//             Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                   <info.icon className="text-primary text-3xl mb-4" />
//                   <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
//                   {info.details.map((detail, idx) => (
//                     <p key={idx} className="text-gray-600">{detail}</p>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white p-8 rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="form-label">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="form-input"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="form-label">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="form-input"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="form-label">Subject</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="form-input"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="form-label">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className="form-input"
//                   required
//                 ></textarea>
//               </div>

//               <button type="submit" className="btn-primary w-full">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;









import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 0000000000', '+91 0000000000'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@medbook.com', 'info@medbook.com'],
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Healthcare Ave', 'Medical District, IN 10001'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 9AM - 2PM'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have. 
              We look forward to hearing from you.
            </p>
            <div className="flex items-center justify-center gap-2 mt-8">
              <span className="text-blue-200">Need immediate assistance?</span>
              <a href="tel:+91 00000000000" className="inline-flex items-center text-white hover:text-blue-200 transition-colors">
                Call us now <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Choose the most convenient way to reach us. Our team is ready to assist you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
