import * as React from 'react';
import {FaArrowUp, FaBars, FaTimes} from 'react-icons/fa'; // Icons for menu and close
import Logo from './../../../assest/images/cute-mobile-phone-character-saying-thank-you-vector-41712253.jpg';
import './style.css';

export const NavBar: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [showScrollButton, setShowScrollButton] = React.useState(false);
    const [scrollButtonAnimation, setScrollButtonAnimation] = React.useState('');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false); // State to manage mobile menu visibility

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setIsScrolled(true);
            setShowScrollButton(true);
            setScrollButtonAnimation('animate-slideIn');
        } else {
            setIsScrolled(false);
            setScrollButtonAnimation('animate-slideOut');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            setIsMenuOpen(false); // Close the menu after clicking on a link
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div
                className={`fixed flex h-14 flex-row items-center sm:justify-between md:justify-around md:w-screen sm:w-screen z-50 font-publicSans 
                transition-colors duration-300 ${isScrolled ? 'bg-white border-b-2' : 'bg-transparent'}`}>
                <img className="h-10 w-10 ml-4" src={Logo} alt="Logo"/>

                <div className="md:hidden mr-4 z-50" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>} {/* Menu/Close Icon */}
                </div>

                {/* Desktop Menu Items */}
                <ul className="hidden md:flex md:items-center">
                    <li className="relative mr-5 hover:text-purple-700">
                        <button onClick={() => handleScrollTo('introduction')}>Home</button>
                    </li>
                    <li className="relative mr-5 hover:text-purple-700">
                        <button onClick={() => handleScrollTo('about')}>About</button>
                    </li>
                    <li className="relative mr-5 hover:text-purple-700">
                        <button onClick={() => handleScrollTo('education')}>Education</button>
                    </li>
                    <li className="relative mr-5 hover:text-purple-700">
                        <button onClick={() => handleScrollTo('skills')}>Tech Stack</button>
                    </li>
                    <li className="relative mr-5 hover:text-purple-700">
                        <button onClick={() => handleScrollTo('projects')}>Project</button>
                    </li>
                    <li className="relative mr-5 hover:text-purple-700">
                        <button onClick={() => handleScrollTo('contact')}>Contact</button>
                    </li>
                </ul>

                {/* Mobile Sidebar Menu */}
                <ul
                    className={`flex flex-col p-6 fixed top-0 right-0 w-3/4 h-full bg-white opacity-95 transform ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out md:hidden z-20 shadow-lg`}
                >
                    <li className="my-2 text-lg hover:text-purple-700 mt-10">
                        <button onClick={() => handleScrollTo('introduction')}>Home</button>
                    </li>
                    <li className="my-2 text-lg hover:text-purple-700">
                        <button onClick={() => handleScrollTo('about')}>About</button>
                    </li>
                    <li className="my-2 text-lg hover:text-purple-700">
                        <button onClick={() => handleScrollTo('education')}>Education</button>
                    </li>
                    <li className="my-2 text-lg hover:text-purple-700">
                        <button onClick={() => handleScrollTo('skills')}>Tech Stack</button>
                    </li>
                    <li className="my-2 text-lg hover:text-purple-700">
                        <button onClick={() => handleScrollTo('projects')}>Project</button>
                    </li>
                    <li className="my-2 text-lg hover:text-purple-700">
                        <button onClick={() => handleScrollTo('contact')}>Contact</button>
                    </li>
                </ul>

            </div>

            {/* Scroll to Top Button */}
            {showScrollButton && (
                <button
                    className={`z-10 fixed bottom-10 right-10 bg-purple-700 text-white md:px-3 md:py-3 sm:px-2 sm:py-2 rounded-full shadow-lg 
                    transition-transform duration-300 ease-in-out hover:bg-purple-950 animate-bounce ${scrollButtonAnimation}`}
                    onClick={scrollToTop}
                >
                    <FaArrowUp/>
                </button>
            )}
        </>
    );
};
