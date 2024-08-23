import React, { Component } from 'react';
import IJSE from './../../../assest/images/education/ijse.jpeg'
import Bolton from './../../../assest/images/education/bolton.jpg'

export class Education extends Component {
    render() {
        return (
            <div className="bg-lightBlue min-h-full py-10">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-purple-800 mb-4">
                        <span role="img" aria-label="graduation cap">🎓</span> My Education
                    </h2>
                    <p className="text-gray-600 mb-10">
                        Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div data-aos="fade-up"
                         data-aos-anchor-placement="top-bottom"
                         className="bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center mb-8 hover:shadow-lg">
                        <img
                            src={Bolton}
                            alt="Bolton university"
                            className="w-full md:w-1/3 h-48 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                        />
                        <div className="p-6 w-full">
                            <h3 className="text-2xl font-bold text-blue-900">Bcs (Hons). in Computer Science</h3>
                            <p className="text-gray-600 mt-2">University of Bolton</p>
                            <p className="text-green-500 font-medium mt-2">2024-2025 | Pursuing</p>
                        </div>
                    </div>

                    <div data-aos="fade-up"
                         data-aos-anchor-placement="top-bottom"
                         className="bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center hover:shadow-lg">
                        <img
                            src={IJSE}
                            alt="IJSE - Institute of software Engineering"
                            className="w-full md:w-1/3 h-48 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                        />
                        <div className="p-6 w-full">
                            <h3 className="text-2xl font-bold text-blue-900">Graduate Diploma in Software Engineering - GDSE</h3>
                            <p className="text-gray-600 mt-2">IJSE - Institute of software Engineering</p>
                            <p className="text-green-500 font-medium mt-2">2022-2024 | Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
