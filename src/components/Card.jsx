import React, { useState, useEffect } from 'react';
import Modal from './ModalCard';

const Card = ({ imagen, title, price }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    // Efecto para bloquear/desbloquear el scroll
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Limpieza al desmontar el componente
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <>
            <button onClick={handleOpenModal} className="relative flex justify-center items-center p-4">
                <div className="w-full max-w-md rounded-lg overflow-hidden group shadow-lg relative">
                    <img
                        src={imagen}
                        alt=""
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ filter: 'brightness(40%)' }} 
                    />
                    <div className="absolute inset-0 flex justify-center flex-col items-center">
                        <h2 className="text-white text-3xl md:text-4xl font-extrabold md:font-bold tracking-widest md:tracking-wide text-center px-4">
                            {title}
                        </h2>
                        <span className='text-white text-lg font-semibold'>${price} <span className='text-[10px]'>MXN</span> </span>
                    </div>
                </div>
            </button>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={title} />
        </>
    );
};

export default Card;