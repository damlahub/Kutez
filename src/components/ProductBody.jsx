import React from 'react';

export const ProductBody = ({ href, name, price }) => {
    return (
        <div className="product-container">
            <a href={href}>
                <h3 className="mt-4 text-sm text-gray-700 product-name">{name}</h3>
                <p className=" mt-1 text-lg font-medium text-gray-900 product-price">{price}</p>
            </a>
        </div>
    );
};
