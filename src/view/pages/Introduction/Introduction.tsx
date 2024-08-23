import React from 'react';
import {ReactTyped as Typed} from 'react-typed';
import Particles from "react-tsparticles";
import {loadFull} from 'tsparticles';
import profilePic from './../../../assest/images/cute-mobile-phone-character-saying-thank-you-vector-41712253.jpg';
import './particles.css';
import {FaArrowDown} from 'react-icons/fa';

export class Introduction extends React.Component {
    particlesInit = async (main: any) => {
        await loadFull(main);
    };

    handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    render() {
        return (
            <div id="container"
                 className="relative min-h-screen bg-gray-50 flex items-center justify-around px-4 md:px-8">
                {/* Particles background */}
                <Particles
                    id="tsparticles"
                    // init={this.particlesInit}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#000000",
                            },
                            links: {
                                color: "#000000",
                                distance: 150,
                                enable: true,
                                opacity: 0.4,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 2.2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 50,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: {min: 1, max: 5},
                            },
                        },
                        detectRetina: true,
                    }}
                    className="absolute"
                />

                {/* Introduction content */}
                <div data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1500"
                     className="relative z-10 text-start">
                    <p className="text-3xl md:text-4xl font-bold text-primary">Hi There</p>
                    <h1 className="text-5xl md:text-5xl font-bold mt-2 text-primary">
                        I'm <span className="text-yellow-500">Ravindu Kaushalya</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mt-4">
                        I am into{' '}
                        <span className="text-red-600">
                            <Typed
                                strings={[
                                    'Web Development',
                                    'Mobile Application Development',
                                    'Backend Development',
                                ]}
                                typeSpeed={80}
                                backSpeed={50}
                                loop
                            />
                        </span>
                    </p>

                    <button className="mt-6 px-6 md:px-8 py-3 bg-primary text-white rounded-full flex items-center
                    transition-transform duration-300 hover:bg-blue-800 focus:outline-none group"
                            onClick={() => this.handleScrollTo('about')}>
                        <span>About Me</span>
                        <FaArrowDown
                            className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1"/>
                    </button>

                    <div className="flex mt-8 space-x-4">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram"/>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="Facebook"/>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub"/>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn"/>
                        </a>
                        <a href="https://dev.to" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/color/48/dribbble.png" alt="dribbble"/>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter"/>
                        </a>
                    </div>
                </div>

                <div  data-aos="fade-left" className="relative z-10 mt-12">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-60 h-60 md:w-96 md:h-96 rounded-full object-cover border-4 border-gray-300 shadow-lg"
                    />
                </div>
            </div>
        );
    }
}
