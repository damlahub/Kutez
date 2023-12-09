import React, { useState } from 'react';
import { CarouselBtnSVG } from './CarouselBtnSVG';

export const CarouselBtn = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`all-products flex items-center mt-20 p-3 ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <CarouselBtnSVG   color={isHovered ? 'white' : 'black'} />
            <button style={{
                    backgroundColor: isHovered ? 'black' : 'white',
                    color: isHovered ? 'white' : 'black',
                }}>
                VIEW ALL PRODUCTS
            </button>
        </div>
    );
};
