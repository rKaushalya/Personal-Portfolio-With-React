import {Component} from "react";
import {FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaFacebook} from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi";
import {MdLocationOn} from "react-icons/md";
import {SiGmail} from "react-icons/si";
import * as React from "react";

export class Footer extends Component {

    handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    render() {
        return (
            <footer className="bg-[#0D0E2B] text-white py-8">
                <div className="flex md:flex-wrap sm:flex-col md:flex-row md:justify-evenly sm:ml-5 mr-5">
                    <div className="md:w-3/12 sm:w-full">
                        <h2 className="text-xl font-semibold">Ravindu's Portfolio</h2>
                        <p className="mt-4">Thank you for visiting my personal portfolio website. Connect with me over
                            socials.</p>
                        <p className="mt-2">Keep Rising 🚀. Connect with me over live chat!</p>
                    </div>

                    <div className="sm:mt-10 md:mt-0">
                        <h2 className="text-xl font-semibold">Quick Links</h2>
                        <ul className="mt-4 space-y-2">
                            <li className="hover:text-yellow-500 cursor-pointer">
                                <button onClick={() => this.handleScrollTo('introduction')}>➤ Home</button>
                            </li>
                            <li className="hover:text-yellow-500 cursor-pointer">
                                <button onClick={() => this.handleScrollTo('about')}>➤ About</button>
                            </li>
                                <li className="hover:text-yellow-500 cursor-pointer">
                                    <button onClick={() => this.handleScrollTo('education')}>➤ Education</button>
                                </li>
                            <li className="hover:text-yellow-500 cursor-pointer">
                                <button onClick={() => this.handleScrollTo('skills')}>➤ Tech Stack</button>
                            </li>
                            <li className="hover:text-yellow-500 cursor-pointer">
                                <button onClick={() => this.handleScrollTo('projects')}>➤ Project</button>
                            </li>
                            <li className="hover:text-yellow-500 cursor-pointer">
                                <button onClick={() => this.handleScrollTo('contact')}>➤ Contact</button>
                            </li>
                        </ul>
                    </div>

                    <div className="sm:mt-10 md:mt-0">
                        <h2 className="text-xl font-semibold">Contact Info</h2>
                        <ul className="mt-4 space-y-2">
                            <li className="flex justify-start hover:text-yellow-500 cursor-pointer"><FiPhoneCall className="mr-2"/>
                                <a href="tel:0765320187">+94 765320187</a>
                            </li>
                            <li className="flex justify-start hover:text-yellow-500 cursor-pointer"><SiGmail
                                className="mr-2"/> <a href="mailto:ravinduk56@gmail.com"> ravinduk56@gmail.com</a>
                            </li>
                            <li className="flex justify-start hover:text-yellow-500"><MdLocationOn className="mr-2"/> Galle,
                                Sri Lanka
                            </li>
                        </ul>
                        <div className="flex mt-4 justify-start space-x-4">
                            <a className="hover:text-yellow-500" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl"/>
                            </a>
                            <a className="hover:text-yellow-500" href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl"/>
                            </a>
                            <a className="hover:text-yellow-500" href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-2xl"/>
                            </a>
                            <a className="hover:text-yellow-500" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl"/>
                            </a>
                            <a className="hover:text-yellow-500" href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                                <FaPaperPlane className="text-2xl"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p>
                        Designed With{" "}
                        <span className="text-red-500 sm:text-xs" role="img" aria-label="love">❤️</span>{" "}
                        By Ravindu Kaushalya
                    </p>
                </div>
            </footer>
        );
    }
}
