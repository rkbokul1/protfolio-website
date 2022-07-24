import React from 'react';

const Service = (props) => {
    const {title, description} = props.product;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-2xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;