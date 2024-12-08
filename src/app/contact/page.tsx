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
    <div className="container mx-auto px-4 py-8">

<Banner label='Contact' image='/bg.png'/>

      <h1 className="text-3xl font-bold text-center mb-12">Get In Touch With Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8 px-[191px]">
        {/* Contact Information */}
        <div>
          <div className="space-y-4">
            <div className='flex justify-start items-start'>
            <IoLocation />
            <p className='flex flex-col ml-4'><strong>Address:</strong> 236 5th SE Avenue, New York NY10000, USA</p>
            </div>

            <div className='flex justify-start items-start'>
            <FaPhoneAlt />
            <p className='flex flex-col ml-4'><strong>Phone:</strong> Mobile: +(84) 546-6789 | Hotline: +(84) 456-6789</p>
            </div>

            <div className='flex justify-start items-start'>
            <MdWatchLater/>
            <p className='flex flex-col ml-4'><strong>Working Time:</strong> Mon-Fri: 9:00 - 22:00 | Sat-Sun: 9:00 - 21:00</p>
            </div>
            
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-[22px]">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name} 
                onChange={handleChange} 
                className="w-full border rounded-md p-2" 
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-[22px]">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange} 
                className="w-full border rounded-md p-2" 
                placeholder="Abc@def.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-[22px]">Subject (Optional)</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject} 
                onChange={handleChange} 
                className="w-full border rounded-md p-2" 
                placeholder="Enter a subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-[22px]">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message} 
                onChange={handleChange} 
                rows={4} 
                className="w-full border rounded-md p-2" 
                placeholder="Hi! I’d like to ask about..."
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-[#B88E2F] w-[235px] h-[55px] text-white py-2 px-4 mt-[49px] rounded-[5px] hover:bg-[#B88E2F]"
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
