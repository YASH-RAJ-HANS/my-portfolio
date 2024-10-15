import React from 'react';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  return (
    <div className="container mx-auto flex p-6">
      <div className="w-1/2 pr-4">
        <img
          src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80"
          alt="Profile"
          className="rounded-lg shadow-lg mb-4"
        />
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-700 hover:text-gray-900" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-gray-700 hover:text-gray-900" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="text-2xl text-gray-700 hover:text-gray-900" />
          </a>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded-lg"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded-lg"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
