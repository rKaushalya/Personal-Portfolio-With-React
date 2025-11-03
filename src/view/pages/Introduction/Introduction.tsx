import React from 'react';
import {ReactTyped as Typed} from 'react-typed';
import profilePic from '../../../assest/images/profile/new profile.jpeg';
import {FaArrowDown} from 'react-icons/fa';
import ParticlesBackground from "../../../component/ParticlesBackground/ParticlesBackground";

export class Introduction extends React.Component {

    handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    render() {
        return (
            <div
                id="container"
                className="relative min-h-screen bg-gray-50 flex sm:flex-col sm:justify-center sm:items-center md:flex-row md:justify-around px-4 md:px-8"
            >
                {/* Particles background */}
                <ParticlesBackground />

                {/* Introduction content */}
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="relative z-10 text-start md:pt-0 lg:pt-0 sm:pt-10"
                >
                    <p className="text-3xl lg:text-4xl md:text-3xl font-bold text-primary">Hi There</p>
                    <h1 className="text-5xl lg:text-5xl md:text-3xl sm:text-3xl font-bold mt-2 text-primary">
                        I'm <span className="text-orange-400">Ravindu Kaushalya</span>
                    </h1>
                    <p className="text-xl lg:text-2xl md:text-xl sm:text-lg text-gray-700 mt-4">
                        I am into{" "}
                        <span className="text-red-600">
        <Typed
            strings={[
                "Backend Development",
                "Web Designing",
                "Frontend Development",
                "Android Development",
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
        />
      </span>
                    </p>

                    <button
                        className="mt-6 px-6 md:px-8 md:py-3 sm:px-4 sm:py-2 bg-primary text-white rounded-full flex items-center
                    transition-transform duration-300 hover:bg-blue-800 focus:outline-none group"
                        onClick={() => this.handleScrollTo("about")}
                    >
                        <span>About Me</span>
                        <FaArrowDown
                            className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1"/>
                    </button>

                    <div className="flex mt-8 sm:mt-4 space-x-4 md:w-10/12 sm:w-10/12">
                        <a href="https://www.instagram.com/rkaushalya_/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram"/>
                        </a>
                        <a href="https://web.facebook.com/ravindu.kawshalya.33" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="Facebook"/>
                        </a>
                        <a href="https://github.com/rKaushalya" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/ravindu-kaushalya-691785264/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn"/>
                        </a>
                        <a href="https://dribbble.com/rkaushalya" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/color/48/dribbble.png" alt="dribbble"/>
                        </a>
                        <a href="https://twitter.com/HGR_Kaushalya" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter"/>
                        </a>
                    </div>
                </div>

                <div data-aos="fade-left" className="relative z-10 mt-12 sm:mt-6">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-60 h-60 lg:w-96 lg:h-96 md:w-72 md:h-72 rounded-full
                        object-cover border-4 border-gray-300 shadow-lg"
                    />
                </div>
            </div>

        );
    }
}
