import React from 'react';

interface AboutMeProps {
    profilePic: string;
}

export class AboutMe extends React.Component<AboutMeProps> {
    handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const { clientX: mouseX, clientY: mouseY } = e;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = mouseX - left - width / 2;
        const y = mouseY - top - height / 2;
        e.currentTarget.style.transform = `translate(${x / 10}px, ${y / 10}px)`;
    };

    handleMouseLeave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
    };

    render() {
        const { profilePic } = this.props;
        return (
            <div className="min-h-full flex justify-center bg-white px-4 py-12">
                {/* Container for image and details */}
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between p-8">
                    {/* Profile Image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0 relative overflow-hidden">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-80 rounded-lg object-cover shadow-lg transition-all duration-300 ease-in-out grayscale hover:grayscale-0"
                            onMouseMove={this.handleMouseMove}
                            onMouseLeave={this.handleMouseLeave}
                            style={{ transition: 'transform 0.3s ease-in-out' }}
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
                            I am a full-stack developer based in Galle, Sri Lanka. I’m following GDSE
                            course from the Institute of Software Engineering. I am very passionate about
                            improving my coding skills & developing applications & websites. I build websites
                            and software using Java, HTML, and JS. I like working for myself to improve
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
                        <button className="mt-8 px-6 py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800">
                            Resume <span className="ml-2">&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
