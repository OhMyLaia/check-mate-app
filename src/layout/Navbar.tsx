import { useRef, useState, useEffect } from "react";
import { FiX, FiMenu } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {

    const [isActive, setIsActive] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    // this is useful for the login / logout button
    // const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(prev => !prev);
        }

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);

    },[]);

    useEffect(() => {
        const handleClickOutsideMenuRef = (e: MouseEvent) => {
            if (menuRef.current && menuRef.current.contains(e.target as Node)) {
                setIsActive(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutsideMenuRef);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenuRef);
        };
    }, []);

    const links = [
        { name: 'Home', path: '/home' },
        { name: 'New Task', path: '/new-task' },
        // { name: 'Dashboard', path: '/dashboard'},
        { name: 'Profile', path: '/profile' },
        { name: 'Contact', path: '/contact' },
        // { name: 'About us', path: '/about' },
    ];

    const toggleMenu = () => {
        setIsActive(prev => !prev)
    }



    return (
        <nav ref={menuRef} className="bg-transparent p-3 montserrat-siya">
            {/* Desktop */}
            <ul className="hidden md:flex space-x-6">
                {links.map(link => (
                    <li className='w-fit' key={link.name}>
                        <Link
                            to={link.path}
                            className="hover:text-white p-1 hover:bg-red-500 rounded-md"
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

            {/* Mobile button */}
            {isMobile && (
                <button
                    onClick={toggleMenu}
                    className="md:hidden w-fit text-3xl focus:outline-none siyaRed-text transition-transform duration-300 hover:scale-110"
                    aria-label="Toggle menu"
                >
                    {isActive ? <FiX /> : <FiMenu />}
                </button>
            )}

            {/* Mobile menu */}
            <ul className={`
                md:hidden absolute left-0 right-0 bg-red-500 shadow-lg
                py-1 px-3 mt-4 z-50 rounded-lg origin-top
                rounded-bl-xl rounded-br-full
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
            `}>
                {links.map(link => (
                    <li className='w-fit' key={link.name}>
                        <Link
                            to={link.path}
                            className="block py-2 text-white hover:bg-gray-100 hover:bg-opacity-20 transition-colors duration-200"
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