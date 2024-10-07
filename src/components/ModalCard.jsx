import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const foodOptions = {
    tacos: ["Barbacoa", "Picadillo", "Rajas con Queso", "Chicharrón"],
    burritos: ["Barbacoa", "Picadillo", "Rajas con Queso", "Chicharrón"],
    quesadilla: ["Barbacoa", "Picadillo", "Rajas con Queso", "Chicharrón"],
    gorditas: ["Barbacoa", "Picadillo", "Rajas con Queso", "Chicharrón"],
    hamburguesas: ["Con Papas $75", "Sencilla $60"],
    lonches: ["Deshebrada", "Bistec"],
    // Agrega más tipos de comida según sea necesario
};

const ModalCard = ({ isOpen, onClose, title }) => {
    const styles = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-150px)',
        config: { tension: 200, friction: 20 },
    });

    if (!isOpen) return null;

    // Obtener las opciones de comida según el título
    const options = foodOptions[title.toLowerCase()] || [];

    return (
        <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <animated.div style={styles} className="bg-white rounded-lg shadow-lg p-6 w-4/5 md:w-96">
                <div className="flex justify-between items-center">
                    <h4 className="text-lg font-bold">{title}</h4>
                    <button onClick={onClose} className="text-red-500 text-2xl hover:text-gray-800">
                        &times;
                    </button>
                </div>
                <div className="mt-4">
                    {options.length > 0 ? (
                        <ul>
                            {options.map((option, index) => (
                                <li key={index} className="text-gray-700">
                                    - {option}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay opciones disponibles.</p>
                    )}
                </div>
            </animated.div>
        </div>
    );
};

export default ModalCard;