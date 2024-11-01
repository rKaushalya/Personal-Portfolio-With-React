import React, { Component, FormEvent } from "react";
import emailjs from "emailjs-com";
import Image from './../../../assest/images/contact.png';

interface ContactMeProps {}

interface ContactMeState {}

export class ContactMe extends Component<ContactMeProps, ContactMeState> {
    sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_3zg0wff",    // Replace with your EmailJS Service ID
            "template_9nms3is",    // Replace with your EmailJS Template ID
            e.target as HTMLFormElement,
            "mS2-o6-Igddh0XFcH"         // Replace with your EmailJS User ID
        ).then(
            (result) => {
                alert("Message sent successfully!");
            },
            (error) => {
                alert("Failed to send message. Please try again.");
            }
        );

        (e.target as HTMLFormElement).reset(); // Clears the form after submission
    };

    render() {
        return (
            <div className="flex flex-col items-center justify-center py-12 px-8 md:px-20 lg:px-20 bg-white">
                <h2 className="py-5 lg:text-4xl md:text-3xl sm:text-3xl text-center sm:mb-0 lg:mb-12">
                    Contact <span className="text-purple-700">Me</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center w-full">
                    <div data-aos="flip-left" className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <img
                            src={Image}
                            alt="Contact Illustration"
                            className="lg:w-3/4 h-auto md:w-96"
                        />
                    </div>
                    <div data-aos="zoom-in-left" className="md:w-1/2">
                        <h3 className="text-xl font-semibold mb-2">Get in touch</h3>
                        <p className="text-gray-500 mb-8">
                            My inbox is always open! 📧 Whether you've got a burning question or want to drop a friendly
                            "hello", I'm all ears!👂 Let's chat! 🎉
                        </p>
                        <form className="space-y-4" onSubmit={this.sendEmail}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name *"
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Message *"
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                                    required
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

export default ContactMe;
