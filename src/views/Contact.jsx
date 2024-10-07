import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto p-6 pt-20">
            <h1 className="text-4xl font-bold text-center text-green-800 mb-6">Contáctanos</h1>
            <p className="text-center text-gray-700 mb-8">
                Si tienes alguna pregunta o deseas realizar un pedido, no dudes en ponerte en contacto con nosotros.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Información de Contacto</h2>
                <p>📍 <strong>Dirección:</strong> Calle Dr. Marquez 409-A, Piedras Negras, Coahuila</p>
                <p>📞 <strong>Teléfono:</strong> <a className='text-green-600 font-semibold border-b-2 border-green-700' href="tel:+52565978-0847 ">(565) 978-0847</a></p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Horarios de Atención</h2>
                <p>Lunes a Sabado: 7:30 AM - 1:00 PM</p>
                <p>Domingo: Cerrado</p>
            </div>

            {/* <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Síguenos en Redes Sociales</h2>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-green-600 hover:text-green-800 transition duration-300">Facebook</a>
                    <a href="#" className="text-green-600 hover:text-green-800 transition duration-300">Instagram</a>
                </div>
            </div> */}


        </div>
    );
};

export default Contact;