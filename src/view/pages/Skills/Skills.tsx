import React, { useState } from "react";
import { FaNodeJs, FaReact, FaHtml5, FaCss3, FaAws } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiMysql, SiPhp } from "react-icons/si";
import { FiHexagon } from "react-icons/fi";

export const Skills = () => {
    const [selectedTab, setSelectedTab] = useState("Frontend");

    const renderLogos = () => {
        switch (selectedTab) {
            case "Frontend":
                return (
                    <div className="grid grid-cols-4 gap-12 w-full">
                        <div className="flex flex-col items-center">
                            <FaReact className="text-blue-500 text-5xl mb-2" />
                            <p>ReactJS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaHtml5 className="text-orange-600 text-5xl mb-2" />
                            <p>HTML5</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaCss3 className="text-blue-500 text-5xl mb-2" />
                            <p>CSS3</p>
                        </div>
                    </div>
                );
            case "Backend":
                return (
                    <div className="grid grid-cols-5 gap-12 w-full">
                        <div className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <FaNodeJs className="text-green-600 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">NodeJS</p>
                        </div>

                        <div className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiExpress className="text-gray-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">ExpressJS</p>
                        </div>
                        <div className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiMongodb className="text-green-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125" />
                            <p className="transition-all duration-300 ease-in-out">MongoDB</p>
                        </div>
                        <div className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiMysql className="text-blue-700 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125" />
                            <p className="transition-all duration-300 ease-in-out">MySQL</p>
                        </div>
                        <div className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <FaAws className="text-orange-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125" />
                            <p className="transition-all duration-300 ease-in-out">AWS</p>
                        </div>
                    </div>
                );
            case "Others":
                return (
                    <div className="grid grid-cols-4 gap-12 w-full">
                        {/* Add other skills here */}
                        <div className="flex flex-col items-center">
                            <SiPhp className="text-purple-700 text-5xl mb-2" />
                            <p>PHP</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FiHexagon className="text-red-500 text-5xl mb-2" />
                            <p>Hexagon</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="text-center py-12">
            <h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    onClick={() => setSelectedTab("Frontend")}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                        selectedTab === "Frontend" ? "bg-purple-500 text-white" : "bg-gray-200"
                    }`}
                >
                    Frontend
                </button>
                <button
                    onClick={() => setSelectedTab("Backend")}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                        selectedTab === "Backend" ? "bg-purple-500 text-white" : "bg-gray-200"
                    }`}
                >
                    Backend
                </button>
                <button
                    onClick={() => setSelectedTab("Others")}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                        selectedTab === "Others" ? "bg-purple-500 text-white" : "bg-gray-200"
                    }`}
                >
                    Others
                </button>
            </div>
            <div className="flex justify-center mx-auto max-w-[90%] md:max-w-[70%] lg:max-w-[50%]">{renderLogos()}</div>
        </div>
    );
};
