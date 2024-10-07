import React, { useState } from 'react';
import LinkUrl from '../components/LinkUrl';
import imgMenu from '../assets/Menu.svg';
import { useSpring, animated } from 'react-spring';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [scroll, setScroll] = useState(false);

    // Detectar el scroll para cambiar el diseño de la navbar
    window.onscroll = () => {
        if (window.scrollY > 0) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    // Animación para mostrar/ocultar el menú
    const menuAnimation = useSpring({
        transform: menu ? 'translateX(0%)' : 'translateX(-100%)',
        opacity: menu ? 1 : 0,
    });

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <nav className={`fixed w-full z-50 flex justify-between items-center transition-all duration-700 px-10 border-b border-green-700 backdrop-blur-md  
        ${scroll ? 'bg-black/50 text-white py-2' : 'bg-white/90 text-green-800 py-4'}`}>
            <div>
                <h1 className='text-3xl font-extrabold'>Don Berni</h1>
            </div>

            {/* Botón de menú para dispositivos móviles */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className='w-6'>
                    <img className='w-full h-full object-content' src={imgMenu} alt="Menu" />
                </button>
            </div>

            {/* Enlaces para pantallas grandes */}
            <ul className={`hidden md:flex space-x-6 items-center`}>
                <LinkUrl url="/" text="Home" />
                <LinkUrl url="/contact" text="Contacto" />
                <LinkUrl url="/Servicios" text="Servicios" />
            </ul>

            {/* Menú desplegable en pantallas pequeñas */}
            <animated.div
                style={menuAnimation}
                className={`absolute top-0 left-0 w-3/5 h-screen bg-green-900 text-white flex flex-col items-center justify-center md:hidden transition-all duration-100 ${
                    menu ? 'block' : 'hidden'
                }`}
            >
                <LinkUrl url="/" text="Inicio" onClick={toggleMenu} />
                <LinkUrl url="/contact" text="Contacto" onClick={toggleMenu} />
                <LinkUrl url="/Servicios" text="Servicios" onClick={toggleMenu} />
            </animated.div>
        </nav>
    );
};

export default Navbar;
