import React, { Component } from 'react';
import IJSE from './../../../assest/images/education/ijse.jpeg'
import London from './../../../assest/images/education/London.jpg'

export class Education extends Component {
    render() {
        return (
            <div className="bg-lightBlue min-h-full py-10">
                <div className="text-center">
                    <h2 className="pt-5 lg:text-4xl md:text-3xl sm:text-3xl mb-4">
                        <span role="img" aria-label="graduation cap">🎓</span> My Education
                    </h2>
                    <p className="text-gray-600 mb-10 lg:text-[14px] md:text-xs sm:text-xs sm:mr-5 sm:ml-5">
                        Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
                    </p>
                </div>
                <div className="lg:max-w-6xl mx-auto">
                    <div data-aos="fade-up"
                         data-aos-anchor-placement="top-bottom"
                         className="md:ml-10 md:mr-10 sm:ml-10 sm:mr-10 bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center mb-8 hover:shadow-lg">
                        <img
                            src={London}
                            alt="Bolton university"
                            className="w-full lg:w-1/3 md:h-36 md:w-72 h-48 object-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
                        />
                        <div className="p-6 w-full">
                            <h3 className="lg:text-2xl md:text-xl sm:text-lg font-bold text-blue-900">BEng (Hons) Software Engineering</h3>
                            <p className="text-gray-600 mt-2">London Metropolitan University (UK)</p>
                            <p className="text-green-500 lg:font-medium md:text-xs mt-2">2024-2025 | Pursuing</p>
                        </div>
                    </div>

                    <div data-aos="fade-up"
                         data-aos-anchor-placement="top-bottom"
                         className="md:ml-10 md:mr-10 sm:ml-10 sm:mr-10 bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center hover:shadow-lg">
                        <img
                            src={IJSE}
                            alt="IJSE - Institute of software Engineering"
                            className="w-full lg:w-1/3 md:h-36 md:w-72 h-48 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                        />
                        <div className="p-6 w-full">
                            <h3 className="lg:text-2xl md:text-xl sm:text-lg font-bold text-blue-900">Graduate Diploma in Software Engineering - GDSE</h3>
                            <p className="text-gray-600 mt-2">IJSE - Institute of software Engineering</p>
                            <p className="text-green-500 lg:font-medium md:text-xs mt-2">2022-2024 | Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
