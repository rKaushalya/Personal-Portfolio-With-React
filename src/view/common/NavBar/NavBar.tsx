import * as React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Logo from './../../../assest/images/cute-mobile-phone-character-saying-thank-you-vector-41712253.jpg';
import './style.css';

export const NavBar: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [showScrollButton, setShowScrollButton] = React.useState(false);
    const [scrollButtonAnimation, setScrollButtonAnimation] = React.useState('');

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
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div
                className={`flex h-14 flex-row items-center justify-around fixed w-screen z-20 font-publicSans transition-colors duration-300 ${isScrolled ? 'bg-white border-b-2' : 'bg-transparent'}`}>
                <img className="h-10 w-10" src={Logo} alt="Logo" />

                <div>
                    <ul className="list-none flex mt-1">
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
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollButton && (
                <button
                    className={`z-10 fixed bottom-10 right-10 bg-purple-700 text-white px-3 py-3 rounded-full shadow-lg 
                    transition-transform duration-300 ease-in-out hover:bg-purple-950 animate-bounce ${scrollButtonAnimation}`}
                    onClick={scrollToTop}
                >
                    <FaArrowUp/>
                </button>
            )}
        </>
    );
};
