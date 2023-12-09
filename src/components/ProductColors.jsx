import React from 'react';

export const ProductColors = ({id, handleColorOptionClick, selectedColor }) => {
    return (
        <>
        <div className='color-options mt-5'>
        <div className="option" id='yellow-option' onClick={() => handleColorOptionClick(id, 'yellow-option')}></div>
        <div className="option" id='white-option' onClick={() => handleColorOptionClick(id, 'white-option')}></div>
        <div className="option" id='bronz-option' onClick={() => handleColorOptionClick(id, 'bronz-option')}></div>
        </div>
        <p className='color-name'>{selectedColor}</p>
        </>
    );
};