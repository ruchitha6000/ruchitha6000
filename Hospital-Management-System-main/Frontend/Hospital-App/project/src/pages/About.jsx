// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaHospital, FaUserMd, FaUsers, FaAward, FaStethoscope, FaHeart, FaBrain, FaBone, FaTeeth, FaEye, FaLungs, FaNotesMedical } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// function About() {
//   const [activeTab, setActiveTab] = useState('overview');

//   const stats = [
//     { icon: FaHospital, count: '50+', label: 'Partner Hospitals' },
//     { icon: FaUserMd, count: '200+', label: 'Expert Doctors' },
//     { icon: FaUsers, count: '10000+', label: 'Happy Patients' },
//     { icon: FaAward, count: '15+', label: 'Years Experience' },
//   ];

//   const team = [
//     {
//       name: 'Dr. Sarah Johnson',
//       role: 'Chief Medical Officer',
//       image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
//       bio: 'Leading our medical excellence initiatives with over 15 years of experience.',
//       specialties: ['Cardiology', 'Internal Medicine'],
//       education: ['MD - Harvard Medical School', 'Residency - Mayo Clinic']
//     },
//     {
//       name: 'Dr. Michael Chen',
//       role: 'Head of Cardiology',
//       image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
//       bio: 'Pioneering innovative cardiac care approaches for better patient outcomes.',
//       specialties: ['Cardiology', 'Interventional Cardiology'],
//       education: ['MD - Stanford University', 'Fellowship - Cleveland Clinic']
//     },
//     {
//       name: 'Dr. Emily Rodriguez',
//       role: 'Head of Neurology',
//       image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
//       bio: 'Specializing in advanced neurological treatments and research.',
//       specialties: ['Neurology', 'Neurosurgery'],
//       education: ['MD - Johns Hopkins', 'Fellowship - Mass General']
//     },
//     {
//       name: 'Dr. James Wilson',
//       role: 'Head of Orthopedics',
//       image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300',
//       bio: 'Expert in minimally invasive orthopedic procedures.',
//       specialties: ['Orthopedics', 'Sports Medicine'],
//       education: ['MD - Yale', 'Fellowship - HSS']
//     }
//   ];

//   const specialties = [
//     { icon: FaHeart, name: 'Cardiology', description: 'Comprehensive heart care' },
//     { icon: FaBrain, name: 'Neurology', description: 'Advanced brain treatments' },
//     { icon: FaBone, name: 'Orthopedics', description: 'Joint and bone care' },
//     { icon: FaTeeth, name: 'Dental', description: 'Complete dental services' },
//     { icon: FaEye, name: 'Ophthalmology', description: 'Vision care experts' },
//     { icon: FaLungs, name: 'Pulmonology', description: 'Respiratory health' },
//     { icon: FaNotesMedical, name: 'Nephrology', description: 'Kidney care specialists' },
//     { icon: FaStethoscope, name: 'General Medicine', description: 'Primary healthcare' }
//   ];

//   const achievements = [
//     {
//       year: '2023',
//       title: 'Excellence in Healthcare',
//       description: 'Recognized for outstanding patient care and service quality.'
//     },
//     {
//       year: '2022',
//       title: 'Innovation Award',
//       description: 'Pioneering telemedicine solutions in healthcare delivery.'
//     },
//     {
//       year: '2021',
//       title: 'Best Hospital Network',
//       description: 'Awarded for extensive healthcare coverage and accessibility.'
//     }
//   ];

//   return (
//     <div className="space-y-16 py-12">
//       {/* Hero Section */}
//       <section className="relative h-[400px] bg-gradient-to-r from-primary to-blue-600 text-white">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-black opacity-30"></div>
//         </div>
//         <div className="relative h-full flex items-center">
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-3xl"
//             >
//               <h1 className="text-5xl font-bold mb-6">About MedBook</h1>
//               <p className="text-xl text-gray-100 mb-8">
//                 Revolutionizing healthcare access through technology and compassion
//               </p>
//               <Link
//                 to="/contact"
//                 className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-block"
//               >
//                 Get in Touch
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Navigation Tabs */}
//       <section className="container mx-auto px-4">
//         <div className="flex justify-center space-x-4 border-b border-gray-200">
//           {['overview', 'team', 'specialties', 'achievements'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-6 py-3 font-medium transition-all ${
//                 activeTab === tab
//                   ? 'text-primary border-b-2 border-primary'
//                   : 'text-gray-600 hover:text-primary'
//               }`}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-primary text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <stat.icon className="w-12 h-12 mx-auto mb-4" />
//                 <div className="text-4xl font-bold mb-2">{stat.count}</div>
//                 <div className="text-lg">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Content Sections */}
//       {activeTab === 'overview' && (
//         <section className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
//             <div className="prose prose-lg">
//               <p className="text-gray-600 mb-6">
//                 At MedBook, we're committed to transforming healthcare delivery through innovative technology
//                 and a patient-first approach. Our platform connects patients with leading healthcare providers,
//                 making quality medical care accessible to everyone.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 We believe in creating a seamless healthcare experience where patients can easily find,
//                 book, and consult with the right medical professionals for their needs. Our commitment
//                 to excellence drives us to continuously improve and innovate.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//                 <div className="bg-gray-50 p-6 rounded-lg">
//                   <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
//                   <p className="text-gray-600">
//                     To be the leading healthcare platform that makes quality medical care accessible to everyone,
//                     anywhere, anytime.
//                   </p>
//                 </div>
//                 <div className="bg-gray-50 p-6 rounded-lg">
//                   <h3 className="text-xl font-semibold mb-4">Our Values</h3>
//                   <ul className="list-disc list-inside text-gray-600">
//                     <li>Patient-First Approach</li>
//                     <li>Innovation in Healthcare</li>
//                     <li>Quality and Excellence</li>
//                     <li>Accessibility for All</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {activeTab === 'team' && (
//         <section className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {team.map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden"
//               >
//                 <div className="md:flex">
//                   <div className="md:flex-shrink-0">
//                     <img
//                       className="h-48 w-full md:w-48 object-cover"
//                       src={member.image}
//                       alt={member.name}
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-2">{member.name}</h3>
//                     <p className="text-primary font-medium mb-3">{member.role}</p>
//                     <p className="text-gray-600 mb-4">{member.bio}</p>
//                     <div className="space-y-2">
//                       <div>
//                         <h4 className="font-medium text-gray-700">Specialties:</h4>
//                         <p className="text-gray-600">{member.specialties.join(', ')}</p>
//                       </div>
//                       <div>
//                         <h4 className="font-medium text-gray-700">Education:</h4>
//                         <ul className="text-gray-600">
//                           {member.education.map((edu, i) => (
//                             <li key={i}>{edu}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       )}

//       {activeTab === 'specialties' && (
//         <section className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {specialties.map((specialty, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
//               >
//                 <specialty.icon className="w-12 h-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{specialty.name}</h3>
//                 <p className="text-gray-600">{specialty.description}</p>
//                 <Link
//                   to={`/doctors?specialty=${specialty.name.toLowerCase()}`}
//                   className="text-primary hover:text-primary-dark font-medium inline-block mt-4"
//                 >
//                   Find Doctors →
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       )}

//       {activeTab === 'achievements' && (
//         <section className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="space-y-8">
//               {achievements.map((achievement, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex gap-6 items-start"
//                 >
//                   <div className="flex-shrink-0 w-24 text-right">
//                     <span className="text-xl font-bold text-primary">{achievement.year}</span>
//                   </div>
//                   <div className="flex-grow bg-white p-6 rounded-xl shadow-md">
//                     <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
//                     <p className="text-gray-600">{achievement.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       <section className="container mx-auto px-4">
//         <div className="bg-primary rounded-2xl text-white p-12 text-center">
//           <h2 className="text-3xl font-bold mb-4">Join Our Healthcare Network</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Whether you're a healthcare provider or a patient, be part of our growing community
//           </p>
//           <div className="flex justify-center gap-4">
//             <Link
//               to="/register"
//               className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
//             >
//               Register Now
//             </Link>
//             <Link
//               to="/contact"
//               className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default About;
















import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, UserCog, Users, Award, Heart, Brain, Bone, Bluetooth as Tooth, Eye, Settings as Lungs, ClipboardList, Stethoscope, ChevronRight, Star, Calendar, MapPin, GraduationCap, AlignCenterVertical as Certificate, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: Building2, count: '50+', label: 'Partner Hospitals' },
    { icon: UserCog, count: '200+', label: 'Expert Doctors' },
    { icon: Users, count: '10000+', label: 'Happy Patients' },
    { icon: Award, count: '15+', label: 'Years Experience' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
      bio: 'Leading our medical excellence initiatives with over 15 years of experience.',
      specialties: ['Cardiology', 'Internal Medicine'],
      education: ['MD - Harvard Medical School', 'Residency - Mayo Clinic'],
      awards: ['Best Medical Researcher 2022', 'Healthcare Innovation Award 2021'],
      publications: 2,
      patientsSeen: '5000+'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Head of Cardiology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
      bio: 'Pioneering innovative cardiac care approaches for better patient outcomes.',
      specialties: ['Cardiology', 'Interventional Cardiology'],
      education: ['MD - Stanford University', 'Fellowship - Cleveland Clinic'],
      awards: ['Cardiac Excellence Award 2023', 'Top Cardiologist 2022'],
      publications: 15,
      patientsSeen: '7000+'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Neurology',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
      bio: 'Specializing in advanced neurological treatments and research.',
      specialties: ['Neurology', 'Neurosurgery'],
      education: ['MD - Johns Hopkins', 'Fellowship - Mass General'],
      awards: ['Neuroscience Pioneer Award 2023', 'Research Excellence 2022'],
      publications: 25,
      patientsSeen: '4500+'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Head of Orthopedics',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300',
      bio: 'Expert in minimally invasive orthopedic procedures.',
      specialties: ['Orthopedics', 'Sports Medicine'],
      education: ['MD - Yale', 'Fellowship - HSS'],
      awards: ['Sports Medicine Award 2023', 'Surgical Excellence 2022'],
      publications: 18,
      patientsSeen: '6000+'
    }
  ];

  const specialties = [
    { icon: Heart, name: 'Cardiology', description: 'State-of-the-art cardiac care with advanced diagnostics and treatments', waitTime: '1-2 days', expertise: 'Advanced' },
    { icon: Brain, name: 'Neurology', description: 'Comprehensive brain and nervous system treatments using cutting-edge technology', waitTime: '2-3 days', expertise: 'Advanced' },
    { icon: Bone, name: 'Orthopedics', description: 'Expert care for bones, joints, and musculoskeletal conditions', waitTime: '1-2 days', expertise: 'Advanced' },
    { icon: Tooth, name: 'Dental', description: 'Complete dental care from routine checkups to complex procedures', waitTime: 'Same day', expertise: 'Advanced' },
    { icon: Eye, name: 'Ophthalmology', description: 'Comprehensive eye care and advanced vision treatments', waitTime: '2-3 days', expertise: 'Advanced' },
    { icon: Lungs, name: 'Pulmonology', description: 'Expert respiratory care and treatment for lung conditions', waitTime: '1-2 days', expertise: 'Advanced' },
    { icon: ClipboardList, name: 'Nephrology', description: 'Specialized kidney care and advanced treatment options', waitTime: '2-3 days', expertise: 'Advanced' },
    { icon: Stethoscope, name: 'General Medicine', description: 'Comprehensive primary healthcare services', waitTime: 'Same day', expertise: 'Advanced' }
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Excellence in Healthcare',
      description: 'Recognized for outstanding patient care and service quality.',
      award: 'National Healthcare Award',
      impact: 'Improved patient satisfaction by 45%'
    },
    {
      year: '2022',
      title: 'Innovation Award',
      description: 'Pioneering telemedicine solutions in healthcare delivery.',
      award: 'Digital Health Innovation Prize',
      impact: 'Served 50,000+ patients remotely'
    },
    {
      year: '2021',
      title: 'Best Hospital Network',
      description: 'Awarded for extensive healthcare coverage and accessibility.',
      award: 'Healthcare Network Excellence',
      impact: 'Extended services to 10 new cities'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Transforming Healthcare for a Better Tomorrow
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                At MedBook, we're committed to revolutionizing healthcare access through cutting-edge technology
                and compassionate care. Join us in shaping the future of healthcare.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all inline-flex items-center group"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/book-appointment"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center"
                >
                  Book Appointment
                  <Calendar className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 border-b border-gray-200">
          {['overview', 'team', 'specialties', 'achievements'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-medium text-lg transition-all relative ${
                activeTab === tab
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 stroke-current" />
                <div className="text-4xl font-bold mb-2">{stat.count}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {activeTab === 'overview' && (
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Mission & Vision</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                At MedBook, we envision a world where quality healthcare is accessible to everyone,
                anywhere, at any time. Our mission is to bridge the gap between patients and healthcare
                providers through innovative technology and compassionate care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                {...fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To revolutionize healthcare delivery by creating a seamless, technology-driven
                  ecosystem that puts patients first and enables healthcare providers to deliver
                  exceptional care.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Certificate className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                    Patient-First Approach
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                    Innovation in Healthcare
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                    Quality and Excellence
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                    Accessibility for All
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              {...fadeInUp}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose MedBook?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <UserCog className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-2">Expert Doctors</h4>
                      <p className="text-gray-600">Access to highly qualified and experienced medical professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-2">Easy Scheduling</h4>
                      <p className="text-gray-600">Convenient online booking system for appointments</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-2">Multiple Locations</h4>
                      <p className="text-gray-600">Convenient access to healthcare facilities near you</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
                      <p className="text-gray-600">Round-the-clock assistance for all your healthcare needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {activeTab === 'team' && (
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="md:flex h-full">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-64 w-full md:w-64 object-cover"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{member.name}</h3>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-5 h-5 fill-current" />
                          <span className="ml-1 text-sm">4.9</span>
                        </div>
                      </div>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 mb-4">{member.bio}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-1">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-1">Patients Seen</h4>
                          <p className="text-gray-600">{member.patientsSeen}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <GraduationCap className="w-5 h-5 text-gray-400 mr-2" />
                          <div>
                            <h4 className="font-medium text-gray-700">Education</h4>
                            <ul className="text-gray-600 text-sm">
                              {member.education.map((edu, i) => (
                                <li key={i}>{edu}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-5 h-5 text-gray-400 mr-2" />
                          <div>
                            <h4 className="font-medium text-gray-700">Recent Awards</h4>
                            <ul className="text-gray-600 text-sm">
                              {member.awards.map((award, i) => (
                                <li key={i}>{award}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        to={`/book/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Book Appointment
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'specialties' && (
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <specialty.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{specialty.name}</h3>
                <p className="text-gray-600 mb-4">{specialty.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    Wait time: {specialty.waitTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-2 text-blue-600" />
                    {specialty.expertise} expertise
                  </div>
                </div>

                <Link
                  to={`/doctors?specialty=${specialty.name.toLowerCase()}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                >
                  Find Doctors
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'achievements' && (
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  <div className="flex-shrink-0 w-32 text-right">
                    <span className="text-2xl font-bold text-blue-600">{achievement.year}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 mb-4">{achievement.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Award</h4>
                          <p className="text-gray-800">{achievement.award}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Impact</h4>
                          <p className="text-gray-800">{achievement.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <motion.div
          {...fadeInUp}
          className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl text-white p-12"
        >
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="relative">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Healthcare Network
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Whether you're a healthcare provider or a patient, be part of our mission
                to transform healthcare delivery
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all group"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  Contact Us
                  <Phone className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default About;