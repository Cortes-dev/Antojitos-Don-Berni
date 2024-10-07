import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-2">
                    Todos los derechos reservados &copy; {new Date().getFullYear()}
                </p>
                <p className="text-gray-400 mb-4">
                    Creado por <span className="font-semibold">Diego E. Cortes</span>
                </p>
                <div className="flex justify-center space-x-4 mb-4">
                    <p className="text-gray-400 hover:text-white transition duration-300">Piedras Negras, Coahuila</p>
                    <span>|</span>
                    <p className="text-gray-400 hover:text-white transition duration-300">Don Berni</p>
                </div>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300 underline">
                    Contáctanos
                </Link>
            </div>
        </footer>
    );
};

export default Footer;