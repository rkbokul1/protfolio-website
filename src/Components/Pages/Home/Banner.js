import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    const text =['Welcome Here!','Are you Looking for a Developer?', 'You are in a Perfect Place!'];
    return (
        <div>
            <div class="hero min-h-screen" style={{backgroundImage:'url(https://placeimg.com/1000/800/arch)'}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-white text-3xl font-bold"> 
                            <Typewriter
                                options={{
                                    strings: text,
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></h1>
                        <a href='#services' class="btn btn-secondery">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;