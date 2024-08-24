import React from "react";
import { FaExternalLinkAlt, FaGithub, FaPlayCircle } from "react-icons/fa";
import './style.css'
import Image1 from './../../../assest/images/cute-mobile-phone-character-saying-thank-you-vector-41712253.jpg';

interface Project {
    title: string;
    techStack: string;
    image: string;
    links: {
        live: string;
        github: string;
        demo: string;
    };
}

const projects: Project[] = [
    {
        title: "Instagram MERN",
        techStack: "ReactJS, Redux, NodeJS, ExpressJS, MongoDB, TailwindCSS, MUI, AWS S3, SendGrid, Socket.IO",
        image: Image1,
        links: {
            live: "#",
            github: "https://github.com/rKaushalya",
            demo: "#"
        }
    },
    {
        title: "Flipkart MERN",
        techStack: "ReactJS, Redux, NodeJS, ExpressJS, MongoDB, TailwindCSS, MUI, Paytm, Cloudinary, SendGrid",
        image: Image1,
        links: {
            live: "#",
            github: "#",
            demo: "#"
        }
    },
    {
        title: "ResumeGen",
        techStack: "JavaScript, ReactJS, Chakra UI, ContextAPI, Netlify",
        image: Image1,
        links: {
            live: "#",
            github: "#",
            demo: "#"
        }
    },
    {
        title: "ResumeGen",
        techStack: "JavaScript, ReactJS, Chakra UI, ContextAPI, Netlify",
        image: Image1,
        links: {
            live: "#",
            github: "#",
            demo: "#"
        }
    }
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
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa dolorem excepturi harum non omnis optio perferendis unde vel voluptatem. A aspernatur esse est facilis iusto mollitia quisquam ratione, velit?</p>
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
            <h2 className="py-5 lg:text-4xl md:text-3xl font-bold text-center mb-8">Projects</h2>
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
