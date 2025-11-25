import React, { useRef, useState, useEffect } from "react";
import { FiX, FiMenu } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logoLettersCheckMate from "../assets/logo-letters-check-mate.png";
import { useTranslation } from 'react-i18next';


function Navbar() {

    const [isActive, setIsActive] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    // this is useful for the login / logout button
    // const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        }

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);

    }, []);

    useEffect(() => {
        const handleClickOutsideMenuRef = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsActive(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutsideMenuRef);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenuRef);
        };
    }, []);

    const links = [
        { name: 'Dashboard', path: '/home' },
        { name: 'New Task', path: '/new-task' },
        // { name: 'Dashboard', path: '/dashboard'},
        { name: 'Profile', path: '/profile' },
        { name: 'Contact', path: '/contact' },
        // { name: 'About us', path: '/about' },
    ];

    const toggleMenu = () => {
        setIsActive(prev => !prev)
    }

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };



    return (
        <nav ref={menuRef} className="bg-white/50 px-3 flex flex-row justify-between items-center relative">
            <div>
                <Link to={"/"}>
                    <img src={logoLettersCheckMate} className="w-1/5" />
                </Link>
            </div>
            {/* Desktop */}
            <ul className="hidden md:flex space-x-6">
                {links.map(link => (
                    <li className='w-fit items-center' key={link.name}>
                        <Link
                            to={link.path}
                            className=" px-2 py-1 hover:bg-amber-200 hover:shadow-md rounded-md"
                            onClick={() => setIsActive(false)}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
                {/* {isLoggedIn ? (
            <button
                onClick={handleLogout}
                className="hover:text-white w-fit hover:bg-red-500 rounded-md"
            >
                Log Out
            </button>
        ) : (
            <Link
                to="/#loginForm"
                className="hover:text-white w-fit  hover:bg-red-500 rounded-md"
                onClick={() => setIsOpen(false)}
            >
                Log In
            </Link>
        )} */}
            </ul>
            <div className="flex flex-row me-2 text-xs">
                <button onClick={() => changeLanguage('en')} className="mr-2 font-bold">EN</button>
                <button onClick={() => changeLanguage('es')} className="mr-2 font-bold">ES</button>
                <button onClick={() => changeLanguage('ca')} className="font-bold">CA</button>
            </div>

            {/* Mobile button */}
            {isMobile && (
                <button
                    onClick={toggleMenu}
                    className="md:hidden w-fit text-3xl text-indigo-900 focus:outline-none
                    transition-transform duration-300 hover:scale-110"
                    aria-label="Toggle menu"
                >
                    {isActive ? <FiX /> : <FiMenu />}
                </button>
            )}

            {/* Mobile menu */}
            <ul className={`
                md:hidden absolute left-0 right-0 bg-amber-200 shadow-lg
                px-3 z-50 rounded-lg origin-top-right
                rounded-bl-xl rounded-br-full top-full
                text-indigo-900 font-bold
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
            `}>
                {links.map(link => (
                    <li className='w-fit' key={link.name}>
                        <Link
                            to={link.path}
                            className="block hover:scale-105 py-2 transition-colors duration-200"
                            onClick={() => setIsActive(false)}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
                <li>
                    {/* {isLoggedIn ? (
            <button
                onClick={handleLogout}
                className="w-fit block text-left py-2 text-white hover:bg-gray-100 hover:bg-opacity-20 transition-colors duration-200"
            >
                Log Out
            </button>
        ) : (
            <Link
                to="/#loginForm"
                className="block w-fit py-2 text-white hover:bg-gray-100 hover:bg-opacity-20 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
            >
                Log In
            </Link>
        )} */}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;