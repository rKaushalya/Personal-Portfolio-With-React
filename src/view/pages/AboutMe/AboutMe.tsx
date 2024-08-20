import React from 'react';
import profilePic from './../../../assest/images/cute-mobile-phone-character-saying-thank-you-vector-41712253.jpg';

export class AboutMe extends React.Component {
    render() {
        return (
            <div className="min-h-full flex  justify-center bg-white px-4 py-12">
                {/* Container for image and details */}
                <div
                    className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between p-8">
                    {/* Profile Image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-80 rounded-lg object-cover shadow-lg"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        {/* Title */}
                        <h2 className="text-3xl font-bold text-purple-700">About Me</h2>

                        {/* Name & Role */}
                        <h3 className="mt-4 text-2xl font-semibold text-black">I'm Ravindu</h3>
                        <p className="text-lg text-gray-500">Full Stack Developer</p>

                        {/* Description */}
                        <p className="mt-4 text-gray-600">
                            I am a full-Stack developer based in galle, Sri Lanka. i’m following GDSE
                            Course from institute of software engineering. I am very passionate about
                            improving my coding skills & developing applications & websites. I build Web
                            site and software using Java,HTML,JS. I like Working for myself to improve
                            my skills.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-6">
                            <p className="text-gray-700">
                                <span className="font-semibold text-blue-500">Email</span> :
                                <a href="mailto:ravinduk56@gmail.com"> ravinduk56@gmail.com</a>
                            </p>
                            <p className="text-gray-700 mt-2">
                                <span className="font-semibold text-blue-500">Place</span> : Galle, Sri Lanka
                            </p>
                        </div>

                        {/* Resume Button */}
                        <button
                            className="mt-8 px-6 py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800">
                            Resume <span className="ml-2">&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
