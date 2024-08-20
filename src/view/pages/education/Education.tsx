import React, { Component } from 'react';

export class Education extends Component {
    render() {
        return (
            <div className="bg-lightBlue min-h-screen py-10">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-purple-800 mb-4">
                        <span role="img" aria-label="graduation cap">🎓</span> My Education
                    </h2>
                    <p className="text-gray-600 mb-10">
                        Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    {/* Card 1: Bachelor of Engineering */}
                    <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center mb-8">
                        <img
                            src="https://zealedu.com/images/zeal-campus.jpg" // Use appropriate image URL
                            alt="Zeal Institute"
                            className="w-full md:w-1/3 h-48 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                        />
                        <div className="p-6 w-full">
                            <h3 className="text-2xl font-bold text-blue-900">Bachelor Of Engineering In Information Technology</h3>
                            <p className="text-gray-600 mt-2">Zeal College Of Engineering And Research | SPPU</p>
                            <p className="text-green-500 font-medium mt-2">2020-2024 | Pursuing</p>
                        </div>
                    </div>

                    {/* Card 2: HSC Science */}
                    <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center">
                        <img
                            src="https://example.com/shri-lg-haria-school.jpg" // Use appropriate image URL
                            alt="Shri L. G. Haria School"
                            className="w-full md:w-1/3 h-48 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                        />
                        <div className="p-6 w-full">
                            <h3 className="text-2xl font-bold text-blue-900">HSC Science | Informatic Practices</h3>
                            <p className="text-gray-600 mt-2">Shri L. G. Haria Multipurpose School | CBSE</p>
                            <p className="text-green-500 font-medium mt-2">2018-2020 | Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
