import React from 'react';
import { ProductHeader } from './ProductHeader';
import { ProductBody } from './ProductBody';
import { ProductColors } from './ProductColors';

export const Product = ({ product, productColors, selectedColors, hoveredProductId, setHoveredProductId, handleColorOptionClick }) => {
    const { id, name, href, price, imgWhite, imgBronz, imgGold, imageAlt } = product;
    const productColor = productColors[id];
    return (
        <div className="product" key={id}>
            <ProductHeader
                href={href}
                productColor={productColor}
                imgWhite={imgWhite}
                imgBronz={imgBronz}
                imgGold={imgGold}
                imageAlt={imageAlt}
                id={id}
                setHoveredProductId={setHoveredProductId}
                hoveredProductId={hoveredProductId}
                handleColorOptionClick={handleColorOptionClick}
            />
            <ProductBody
                href={href}
                name={name}
                price={price}
            />
            <ProductColors
                id={id}
                handleColorOptionClick={handleColorOptionClick}
                selectedColor={selectedColors[id]}
            />
        </div>
    );
};