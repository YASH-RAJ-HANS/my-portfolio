import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
// import emailjs from 'emailjs-com';

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    mobile: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      alert('Email is required!');
      return;
    }

    // emailjs
    //   .send(
    //     'your_service_id', // Replace with your EmailJS Service ID
    //     'your_template_id', // Replace with your EmailJS Template ID
    //     formData,
    //     'your_user_id' // Replace with your EmailJS User ID
    //   )
    //   .then(() => {
    //     setShowModal(true);
    //     setFormData({ name: '', email: '', message: '', mobile: '' }); // Clear form
    //   })
    //   .catch((error:string) => {
    //     console.error('Email sending error:', error);
    //     alert('Failed to send the message. Please try again later.');
    //   });
  };

  return (
    <>
    
    <div className="container mx-auto flex flex-col md:flex-row p-6 gap-8 w-[80vw] max-md:w-full justify-center items-center">
      {/* Left Section */}
      <div className="md:w-1/2 h-full ">
        <img
          src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80"
          alt="Profile"
          className="rounded-2xl shadow-lg mb-6 w-full h-full hover:opacity-85 hover:scale-95 transition-all duration-500 cursor-pointer hover:blur-[2px]  z-20"
        />
        {/* <div className=" absolute top-40 left-20 flex space-x-6 justify-center md:justify-start z-10">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-gray-200 hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl text-gray-200 hover:text-gray-400 transition-colors" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="text-3xl text-gray-200 hover:text-gray-400 transition-colors" />
          </a>
        </div> */}
      </div>

      {/* Right Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email *"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            placeholder="Your Mobile"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {/* <img src="./contactUs.png" alt="" className='w-[200px] h-[300px] absolute bottom-0 right-[-20px]'/> */}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Message Sent Successfully!</h3>
            <p className="text-gray-700 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ContactMe;
