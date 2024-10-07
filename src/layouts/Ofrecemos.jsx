import React from 'react';
import tacosCard from '../assets/tacosss_1.webp';
import burrito from '../assets/burrito.webp';
import quesadilla from '../assets/quesadilla.webp';
import gorditas from '../assets/gordas.webp';
import lonches from '../assets/lonches.webp';
import hamburguesa from '../assets/hamburguesa.webp';
import Card from '../components/Card';

const Ofrecemos = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center p-4'>
            <div className='w-full text-center mb-8'>
                <h1 className='text-4xl md:text-5xl font-extrabold font-serif text-green-800'>Ofrecemos</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-lg">
                {/* Cards */}
                <Card imagen={tacosCard} title="Tacos" price="22" />
                <Card imagen={burrito} title="Burritos" price="85" />
                <Card imagen={quesadilla} title="Quesadilla" price="85" />
                <Card imagen={gorditas} title="Gorditas" price="25" />
                <Card imagen={lonches} title="Lonches" price="50" />
                <Card imagen={hamburguesa} title="Hamburguesas" price="60 / 75" />
            </div>
        </div>
    );
}

export default Ofrecemos;