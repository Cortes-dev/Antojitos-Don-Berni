import React from 'react';
import Phone from '../components/Phone';

const Services = () => {
    return (
        <div className="container mx-auto p-6 pt-20">
            <h1 className="text-4xl font-bold text-center text-green-800 mb-6">Servicios</h1>
            <p className="text-center text-gray-700 mb-8">
            ¿Necesitas alguno de nuestros servicios? ¡No dudes en contactarnos! Estamos aquí para ofrecerte la mejor atención.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Nuestros Servicios</h2>
                <ul className="list-disc list-inside">
                    <li>Deshuesar Pollo: <strong>$300</strong></li>
                    <li>Hazar Pollo: <strong>$300</strong></li>
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Información de Contacto</h2>
                <p>📍 <strong>Dirección:</strong> Calle Dr. Marquez 409-A, Piedras Negras, Coahuila</p>
                <p>📞 <strong>Teléfono:</strong> <Phone linkTel="tel:+525659780847" Number="(565) 978-0847" /> <span className='md:hidden'><br /></span> <Phone linkTel="tel:+528626288791" Number="(862) 628-8791" />
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Horarios de Atención</h2>
                <p>Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                <p>Domingo: Cerrado</p>
            </div>

        </div>
    );
}

export default Services;