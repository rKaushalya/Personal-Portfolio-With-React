import React from "react";
import { FaExternalLinkAlt, FaGithub, FaPlayCircle } from "react-icons/fa";
import './style.css'
import Project01 from './../../../assest/images/project/project01.png';
import Project02 from './../../../assest/images/project/project02.png';
import Project03 from './../../../assest/images/project/project3.png';
import Project04 from './../../../assest/images/project/project4.png';
import Project05 from './../../../assest/images/project/project5.png';
import Project06 from './../../../assest/images/project/project6.png';
import Project07 from './../../../assest/images/project/project7.png';
import Project08 from './../../../assest/images/project/project8.jpg';
import aluProject from './../../../assest/images/project/sp aluminium.png';
import tourease from './../../../assest/images/project/tourease.png';

interface Project {
    title: string;
    techStack: string;
    image: string;
    description: string;
    links: {
        live: string;
        github: string;
        demo: string;
    };
}

const projects: Project[] = [
    {
        title: "Website for Aluminium company",
        techStack: "Developed a responsive static website for an Aluminium & Glass Work client, showcasing products, services, and dynamic customer testimonials for an enhanced online presence.",
        image: aluProject,
        description: "",
        links: {
            live: "https://spaluminium.com/",
            github: "#",
            demo: "https://spaluminium.com/"
        },
    },
    {
        title: "TourEase Sri Lanka",
        techStack: "TourEase is a smart tourism guide with AI recommendations, real-time navigation, and easy hotel management system.",
        image: tourease,
        description: "",
        links: {
            live: "#",
            github: "https://github.com/rKaushalya/TourEase-Web-Application",
            demo: "#"
        },
    },
    {
        title: "Work Shop With MERN",
        techStack: "React, TypeScript, Tailwind, MongoDB, Nodejs, Expressjs, Axios",
        image: Project05,
        description: "",
        links: {
            live: "#",
            github: "https://github.com/rKaushalya/SKD-Work-Shop-With-MERN-Stack",
            demo: "#"
        },
    },
    {
        title: "Car Rental System",
        techStack: "HTML 5, Bootstrap, CSS, Jquery, Ajax, Java, Spring Framework, Hibernate, Maven, Mysql",
        image: Project08,
        description: "",
        links: {
            live: "#",
            github: "https://github.com/rKaushalya/Easy-Car-Rental-System",
            demo: "#"
        },
    },
    {
        title: "My First Portfolio",
        techStack: "HTML 5, CSS, JavaScript, Jquery, Bootstrap",
        image: Project03,
        description: "",
        links: {
            live: "https://rkaushalya.github.io/MyPortfolio/",
            github: "https://github.com/rKaushalya/MyPortfolio",
            demo: "#"
        }
    },
    {
        title: "2D Game",
        techStack: "HTML 5, CSS, JavaScript, Jquery, Bootstrap",
        image: Project04,
        description: "",
        links: {
            live: "#",
            github: "https://github.com/rKaushalya/2D_Game-With_HTML_CSS_JS",
            demo: "#"
        }
    },
    {
        title: "D24 Room Management System",
        techStack: "Java, JavaFx, Scene Builder, Hibernate, Lombok, Layered Architecture",
        image: Project07,
        description: "",
        links: {
            live: "#",
            github: "https://github.com/rKaushalya/D24_Room_management_system-with-Hibernate",
            demo: "#"
        },
    },
    {
        title: "Live Chat Application",
        techStack: "Java, Java Socket, JavaFx, Scene Builder",
        image: Project06,
        description: "",
        links: {
            live: "#",
            github: "https://github.com/rKaushalya/Live-Chat-Application",
            demo: "#"
        },
    },
    /*{
        title: "Diving Center Management System",
        techStack: "Java, JavaFx, Scene Builder, Mysql, Layered Architecture, OOP",
        image: Project01,
        description: "",
        links: {
            live: "#",
            github: "https://github.com/rKaushalya/Final-Project",
            demo: "#"
        }
    },*/
    // {
    //     title: "Battlefield Game",
    //     techStack: "Java, JavaFx, Scene Builder",
    //     image: Project02,
    //     description: "",
    //     links: {
    //         live: "#",
    //         github: "https://github.com/rKaushalya/Battlefield-Game",
    //         demo: "#"
    //     }
    // }
];

const ProjectCard = ({ project }: { project: Project }) => (
    <div className="relative group rounded-xl overflow-hidden shadow-lg transition-shadow duration-300">
        <div className="relative">
            <img src={project.image} alt={project.title}
                 className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"/>
            <div
                className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
                <div className="flex space-x-4">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                       className="text-white text-2xl hover:scale-150 transition-transform duration-200">
                        <FaExternalLinkAlt/>
                    </a>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                       className="text-white text-2xl hover:scale-150 transition-transform duration-200">
                        <FaGithub/>
                    </a>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                       className="text-white text-2xl hover:scale-150 transition-transform duration-200">
                        <FaPlayCircle/>
                    </a>
                </div>
                <div className="mt-2 text-center">
                    <p className="text-white">{project.description}</p>
                </div>
            </div>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold text-stone-800">{project.title}</h3>
            <p className="mt-2 text-gray-500 text-sm">{project.techStack}</p>
        </div>
    </div>
);

export const Projects = () => {
    return (
        <div className="py-12 px-8 md:px-20 lg:px-20 min-h-screen">
            <h2 className="py-5 sm:py-2 lg:text-4xl md:text-3xl sm:text-3xl font-__Poppins_524169 text-center md:mb-12">Projects</h2>
            <div data-aos="zoom-in-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <button
                    className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2
                    focus:ring-blue-600 focus:ring-opacity-50 transition-transform duration-300 animate-bounce-slow">
                View All
                </button>
            </div>
        </div>
    );
};
