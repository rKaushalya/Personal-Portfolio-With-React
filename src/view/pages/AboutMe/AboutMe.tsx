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
            <div className="min-h-screen flex flex-col items-center bg-white px-4 py-12">
                {/* Centered Title */}
                <h2 className="md:py-5 sm:py-0 lg:text-4xl md:text-3xl sm:text-3xl text-center mb-8 sm:mb-0">About <span className="text-purple-700"> Me</span></h2>

                {/* Container for image and details */}
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between p-8">
                    {/* Profile Image */}
                    <div data-aos="fade-up-right"
                         className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0 relative overflow-hidden">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="lg:w-80 md:w-72 sm:w-60 rounded-lg object-cover shadow-lg transition-all duration-300
                            ease-in-out grayscale hover:grayscale-0 cursor-pointer"
                            onMouseMove={this.handleMouseMove}
                            onMouseLeave={this.handleMouseLeave}
                            style={{ transition: 'transform 0.3s ease-in-out' }}
                        />
                    </div>

                    {/* Details Section */}
                    <div data-aos="fade-zoom-in"
                         data-aos-easing="ease-in-back"
                         data-aos-delay="300"
                         data-aos-offset="0"
                         className="w-full md:w-1/2 text-center sm:text-left md:text-left">
                        {/* Name & Role */}
                        <h3 className="mt-4 lg:text-2xl md:text-xl sm:text-lg font-semibold text-black">I'm Ravindu</h3>
                        <p className="lg:text-lg md:text-lg text-gray-500">Full Stack Developer</p>

                        {/* Description */}
                        <p className="mt-4 text-gray-600 md:text-xs lg:text-[14px]">
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
                        <a href="https://drive.google.com/file/d/1cPhMq88dAm7m4Xv5ym67ecxJA34N76hu/view?usp=sharing" target="_blank" rel="noreferrer">
                            <button
                                className="mt-8 px-6 py-2 bg-purple-700 text-white font-semibold rounded-lg flex items-center transition-transform duration-300 hover:bg-purple-800 group">
                                <span>Resume</span>
                                <span
                                    className="ml-2 transition-transform duration-300 transform group-hover:translate-x-2">&rarr;</span>
                            </button>
                        </a>

                    </div>
                </div>
            </div>
        );
    }
}
