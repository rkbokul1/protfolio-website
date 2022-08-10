import React from 'react';
import Service from './Service';

const Services = () => {
    const products = [
        {
            id: 1,
            title: 'Full-Stack',
            description: 'With Reactjs, Expressjs, Nodejs and MondoDb.',
        },
        {
            id: 2,
            title: 'UI-UX Design',
            description: 'Professional Ui-UX design in Photoshop, Figma and Adobe-XD.',
        },
        {
            id: 3,
            title: 'Graphics Design',
            description: 'Fully Graphics Related Support.',
        },
        {
            id: 4,
            title: 'Full-Stack',
            description: 'With Reactjs, Expressjs, Nodejs and MondoDb.',
        },
        {
            id: 5,
            title: 'UI-UX Design',
            description: 'Professional Ui-UX design in Photoshop, Figma and Adobe-XD.',
        },
        {
            id: 6,
            title: 'Graphics Design',
            description: 'Fully Graphics Related Support.',
        },
    ]
    return (
        <div id='services' className='px-12'>
            <h1 className='text-center text-3xl my-10 text-primary font-bold'>Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {products.map(product => <Service key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default Services;