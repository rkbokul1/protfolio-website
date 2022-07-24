import React from 'react';

const AboutMe = () => {
    return (
        <div className='px-12 mt-16 bg-slate-200'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" class="min-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">MD. Raihanul Kabir</h1>
                        <p class="py-3 pr-0 lg:pr-72">Junior full stack developer and using latest technology of Node js. Already completed 20+
                            project using mern technolgy and i’m dedicated to improving increasing tools and
                            infrastructure to maximize the productivity. Main moto is- Less and clean code, less time and
                            maximum production.</p>
                        <button class="btn btn-outline">Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;