import React from 'react';
import w from '../assets/w.webp'
import { MdOutlineMail } from "react-icons/md";
import { TbPhone } from "react-icons/tb";

const Contact = () => {
  return (
    <div id='contact' className="min-h-screen flex items-center justify-center bg-gray-100 p-4 lg:py-24">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-[66rem]">
        {/* Form Section */}
        <div className="md:w-3/5 p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Get in Touch</h2>
          <h3 className="text-xl font-semibold mt-4">Let's Collaborate!</h3>
          <p className="text-gray-600 mt-2">
          Whether you're looking for a fresh perspective on your product's user experience or need a complete UI overhaul, I'm here to help bring your vision to life.
          </p>
          <form className="mt-6 space-y-4">
            <div className="flex space-x-4 lg:pb-6">


              {/* name */}
              <label
                htmlFor="f_name"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="text"
                  id="f_name"
                  placeholder="First Name"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                  className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Name
                </span>
              </label>



              {/* last name */}
              <label
                htmlFor="l_name"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="text"
                  id="l_name"
                  placeholder="Last Name"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                  className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Last Name
                </span>
              </label>
            </div>



            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span
                className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
              >
                Email
              </span>
            </label>

            <label htmlFor="OrderNotes" className="sr-only">Order notes</label>

            <div className="overflow-hidden border-transparent">
              <textarea
                id="OrderNotes"
                className="w-full placeholder:text-gray-700 resize-none border-x-0 border-t-0 border-gray-200 px-0 align-top sm:text-sm focus:border-b-2 focus:border-b-blue-500 focus:border-s-0
                "
                rows="4"
                placeholder="Type Your Message Here..."
              ></textarea>
            </div>


            <button
              type="submit"
              className="w-full p-3 bg-primary border border-primary text-accent rounded hover:bg-transparent  hover:text-primary"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="md:w-1/2 bg-gray-100 p-8 flex flex-col items-center justify-center">
          <img
            src='https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D'
            alt="Support"
            className="rounded-lg w-full h-[80%] object-cover mb-4"
          />
          <div className="space-y-4 w-full text-center">
            <div className="bg-background text-gray-400 p-4 rounded-lg shadow-md flex items-center space-x-4">
              <span className='flex items-center justify-center rounded-full bg-gray-300 p-2'><MdOutlineMail /></span>
              <div className='flex flex-col justify-center items-center'>
                <span className="text-accent self-start">email</span>
                <span>techsupport@yourmail.com</span>
              </div>
            </div>


            <div className="bg-background text-gray-400 p-4 rounded-lg shadow-md flex items-center space-x-4">
              <span className='flex items-center justify-center rounded-full bg-gray-300 p-2'><TbPhone /></span>
              <div className='flex flex-col justify-center items-center'>
                <span className="text-accent self-start">phone</span>
                <span>(+005) 432 986 450</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
