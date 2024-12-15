'use client'
import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import Banner from '../components/banner';

interface ContactInfo {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactInfo>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all the required fields!');
      return;
    }
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mt-auto px-4 py-4">

      <Banner label='Contact' image='/bg.png' logo="/images/header/logo.png"/>

      <h1 className="text-3xl font-bold text-center mb-8 sm:mb-12">Get In Touch With Us</h1>

      <div className="grid md:grid-cols-2 gap-8 px-4 md:px-12 lg:px-[191px]">
        {/* Contact Information */}
        <div>
          <div className="space-y-6">
            <div className='flex justify-start items-start'>
              <IoLocation className="text-2xl text-[#B88E2F]" />
              <p className='flex flex-col ml-4 text-sm sm:text-base'>
                <strong>Address:</strong>
                236 5th SE Avenue, New York NY10000, USA
              </p>
            </div>

            <div className='flex justify-start items-start'>
              <FaPhoneAlt className="text-2xl text-[#B88E2F]" />
              <p className='flex flex-col ml-4 text-sm sm:text-base'>
                <strong>Phone:</strong>
                Mobile: +(84) 546-6789 | Hotline: +(84) 456-6789
              </p>
            </div>

            <div className='flex justify-start items-start'>
              <MdWatchLater className="text-2xl text-[#B88E2F]"/>
              <p className='flex flex-col ml-4 text-sm sm:text-base'>
                <strong>Working Time:</strong>
                Mon-Fri: 9:00 - 22:00 | Sat-Sun: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name} 
                onChange={handleChange} 
                className="w-full border rounded-md p-2 text-sm sm:text-base" 
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange} 
                className="w-full border rounded-md p-2 text-sm sm:text-base" 
                placeholder="Abc@def.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject (Optional)</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject} 
                onChange={handleChange} 
                className="w-full border rounded-md p-2 text-sm sm:text-base" 
                placeholder="Enter a subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message} 
                onChange={handleChange} 
                rows={4} 
                className="w-full border rounded-md p-2 text-sm sm:text-base" 
                placeholder="Hi! I’d like to ask about..."
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-[#B88E2F] w-full sm:w-[235px] h-[55px] text-white py-2 px-4 mt-4 sm:mt-[49px] rounded-[5px] hover:bg-[#a17d29]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

