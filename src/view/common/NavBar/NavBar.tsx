import * as React from 'react';
import Logo from './../../../assest/images/cute-mobile-phone-character-saying-thank-you-vector-41712253.jpg';

export const NavBar = () => {
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="flex border-b-2 h-14 flex-row items-center justify-around fixed w-screen bg-white z-20 font-publicSans">
            <img className="h-10 w-10" src={Logo} alt="Logo" />

            <div>
                <ul className="list-none flex mt-1">
                    <li className="relative mr-5 hover:text-secondary">
                        <button onClick={() => handleScrollTo('introduction')}>Home</button>
                    </li>

                    <li className="relative mr-5 hover:text-secondary">
                        <button onClick={() => handleScrollTo('about')}>About</button>
                    </li>

                    <li className="relative mr-5 hover:text-secondary">
                        <button onClick={() => handleScrollTo('education')}>Education</button>
                    </li>

                    <li className="relative mr-5 hover:text-secondary">
                        <button onClick={() => handleScrollTo('skills')}>Tech Stack</button>
                    </li>

                    <li className="relative mr-5 hover:text-secondary">
                        <button onClick={() => handleScrollTo('projects')}>Project</button>
                    </li>

                    <li className="relative mr-5 hover:text-secondary">
                        <button onClick={() => handleScrollTo('contact')}>Contact</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
