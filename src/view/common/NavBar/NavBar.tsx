import * as React from 'react';
import {Link} from 'react-router-dom';
import Logo from './../../../assest/images/cute-mobile-phone-character-saying-thank-you-vector-41712253.jpg'

export const NavBar = () => {
    return (
        <div
            className="flex border-b-2 h-14 flex-row items-center justify-around fixed w-screen bg-white z-20 font-publicSans">
            <img className="h-10 w-10" src={Logo} alt="Logo" />

            <div>
                <ul className="list-none flex mt-1">
                    <li className="relative mr-5 hover:text-secondary">
                        <Link to="/home">Home</Link>
                    </li>

                    <li className="relative mr-5 hover:text-secondary">
                        <Link to="/home">About</Link>
                    </li>

                    <li className="relative mr-5 hover:text-secondary">
                        <Link to="/brand-list">Work</Link>
                    </li>

                    <li className="relative mr-5 hover:text-secondary">
                        <Link to="/sub-brand">Service</Link>
                    </li>

                    <li className="relative mr-5 hover:text-secondary">
                        <Link to="/home">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
