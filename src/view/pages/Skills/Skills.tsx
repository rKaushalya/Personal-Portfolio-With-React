import React, { useState } from "react";
import { FaNodeJs, FaReact, FaHtml5, FaCss3, FaAws, FaDatabase } from "react-icons/fa";
import { SiGit,
    SiGithub,
    SiDocker,
    SiPython,
    SiWordpress,SiExpress, SiMongodb, SiFirebase, SiMysql, SiSpring, SiSonarqube,
    SiJavascript, SiNextdotjs, SiRedux, SiTypescript, SiTailwindcss, SiMui, SiBootstrap, SiJquery, SiOracle, SiJira, SiReact, SiAndroidstudio, SiGoogle, SiFigma } from "react-icons/si";

export const Skills = () => {
    const [selectedTab, setSelectedTab] = useState("Frontend");

    const renderLogos = () => {
        switch (selectedTab) {
            case "Frontend":
                return (
                    <div className="grid grid-cols-5 gap-12 w-full">
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <FaReact
                                className="text-blue-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">ReactJS</p>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <FaHtml5
                                className="text-orange-600 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">HTML5</p>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <FaCss3
                                className="text-blue-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">CSS3</p>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiJavascript
                                className="text-yellow-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">JavaScript</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiNextdotjs
                                className="text-black text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Next.js</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiRedux
                                className="text-purple-600 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Redux.js</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiTypescript
                                className="text-blue-600 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">TypeScript</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiTailwindcss
                                className="text-teal-400 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Tailwind</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiMui
                                className="text-blue-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Material-UI</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiBootstrap
                                className="text-purple-700 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Bootstrap</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiJquery
                                className="text-blue-400 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">jQuery</p>
                        </div>

                    </div>
                );
            case "Backend":
                return (
                    <div className="grid grid-cols-5 gap-12 w-full">
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiOracle
                                className="text-red-600 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Java</p>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <FaNodeJs
                                className="text-green-600 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">NodeJS</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiExpress
                                className="text-gray-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">ExpressJS</p>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiMongodb
                                className="text-green-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">MongoDB</p>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiMysql
                                className="text-blue-700 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">MySQL</p>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <FaAws
                                className="text-orange-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">AWS</p>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiFirebase
                                className="text-yellow-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Firebase</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiSpring
                                className="text-green-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Spring</p>
                        </div>
                    </div>
                );
            case "Others":
                return (
                    <div className="grid grid-cols-5 gap-12 w-full">
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiWordpress
                                className="text-blue-700 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">WordPress</p>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiFigma
                                className="text-pink-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Figma</p>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiSonarqube
                                className="text-blue-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">SonarQube</p>
                        </div>
                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiGit
                                className="text-orange-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Git</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiGithub
                                className="text-black text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">GitHub</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiDocker
                                className="text-blue-600 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Docker</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <FaDatabase
                                className="text-yellow-600 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Fetch API</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiJavascript
                                className="text-yellow-400 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">AJAX</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiJavascript
                                className="text-green-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">JSON</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <FaDatabase
                                className="text-blue-600 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Scene Builder</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <FaDatabase
                                className="text-purple-600 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">JavaFX</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiPython
                                className="text-blue-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Python</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiJira
                                className="text-blue-600 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Jira</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiReact
                                className="text-cyan-400 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">React Native</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiAndroidstudio
                                className="text-green-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Android Studio</p>
                        </div>

                        <div
                            className="flex flex-col items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                            <SiGoogle
                                className="text-blue-500 text-5xl mb-2 transition-transform duration-300 ease-in-out hover:scale-125"/>
                            <p className="transition-all duration-300 ease-in-out">Googling</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="text-center py-12 min-h-screen">
            <h2 className="pt-5 lg:text-4xl md:text-3xl font-bold mb-6">Tech Stack</h2>
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    onClick={() => setSelectedTab("Frontend")}
                    className={`px-12 py-3 rounded-md ${
                        selectedTab === "Frontend" ? "bg-purple-500 text-white" : "bg-gray-200"
                    }`}
                >
                    Frontend
                </button>
                <button
                    onClick={() => setSelectedTab("Backend")}
                    className={`px-12 py-3 rounded-md ${
                        selectedTab === "Backend" ? "bg-purple-500 text-white" : "bg-gray-200"
                    }`}
                >
                    Backend
                </button>
                <button
                    onClick={() => setSelectedTab("Others")}
                    className={`px-12 py-3 rounded-md ${
                        selectedTab === "Others" ? "bg-purple-500 text-white" : "bg-gray-200"
                    }`}
                >
                    Others
                </button>
            </div>
            <div data-aos="zoom-out-up"
                 className="py-5 flex justify-center mx-auto max-w-[90%] md:max-w-[70%] lg:max-w-[50%]">
                {renderLogos()}
            </div>
        </div>
    );
};
