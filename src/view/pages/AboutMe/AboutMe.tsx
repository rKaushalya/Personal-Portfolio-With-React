import React from 'react';
import profilePic from './../../../assest/images/cute-mobile-phone-character-saying-thank-you-vector-41712253.jpg';

export class AboutMe extends React.Component {
    render() {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
                {/* Container for image and details */}
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between bg-gray-100 p-8 rounded-lg shadow-lg">
                    {/* Profile Image */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-64 h-64 rounded-lg object-cover"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        {/* Title */}
                        <h2 className="text-3xl font-bold text-purple-700">About Me</h2>

                        {/* Name & Role */}
                        <h3 className="mt-4 text-2xl font-semibold text-black">I'm Jigar</h3>
                        <p className="text-lg text-gray-500">Full Stack Developer</p>

                        {/* Description */}
                        <p className="mt-4 text-gray-600">
                            I am a Full-Stack developer based in Pune, India. I am an Information Technology
                            undergraduate from SPPU. I am very passionate about improving my coding skills &
                            developing applications & websites. I build WebApps and Websites using MERN Stack.
                            Working for myself to improve my skills. Love to build Full-Stack clones.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-6">
                            <p className="text-gray-700">
                                <span className="font-semibold">Email</span>:
                                <a href="mailto:jigarsable21@gmail.com" className="text-blue-500"> jigarsable21@gmail.com</a>
                            </p>
                            <p className="text-gray-700 mt-2">
                                <span className="font-semibold">Place</span>: Pune, India - 412206
                            </p>
                        </div>

                        {/* Resume Button */}
                        <button className="mt-8 px-6 py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800">
                            Resume <span className="ml-2">&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
