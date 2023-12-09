import React from 'react';

export const ProductHeader = ({ href, productColor, imgWhite, imgBronz, imgGold, imageAlt, id, setHoveredProductId, hoveredProductId, handleColorOptionClick }) => {
    return (
        <div className="w-10/12  overflow-hidden rounded-lg bg-gray-200 ">
            <a href={href}>
                <img
                    src={productColor === 'White Gold' ? imgWhite :
                        productColor === 'Bronz Gold' ? imgBronz : imgGold}
                    alt={imageAlt}
                    className={`h-full w-full object-cover object-center ${hoveredProductId === id ? 'zoom' : ''}`}
                    onMouseEnter={() => setHoveredProductId(id)}
                    onMouseLeave={() => setHoveredProductId(null)}
                />
            </a>
        </div>
    );
};

