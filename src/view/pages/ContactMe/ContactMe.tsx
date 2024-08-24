import React, { Component } from "react";
import Image from './../../../assest/images/contact.png';

export class ContactMe extends Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center py-12 px-8 md:px-20 lg:px-20 bg-white">
                {/* Title section */}
                <h2 className="py-5 lg:text-4xl md:text-3xl font-bold text-center mb-12">Contact <span className="text-purple-700">Me</span></h2>

                <div className="flex flex-col md:flex-row items-center justify-center w-full">
                    {/* Left side with the image */}
                    <div data-aos="flip-left" className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <img
                            src={Image}
                            alt="Contact Illustration"
                            className="lg:w-3/4 h-auto md:w-96"
                        />
                    </div>

                    {/* Right side with the form */}
                    <div data-aos="zoom-in-left" className="md:w-1/2">
                        <h3 className="text-xl font-semibold mb-2">Get in touch</h3>
                        <p className="text-gray-500 mb-8">
                            My inbox is always open! 📧 Whether you've got a burning question or want to drop a friendly
                            "hello", I'm all ears!👂 Let's chat! 🎉
                        </p>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name *"
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message *"
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
                                >
                                    Say Hello 👋
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
