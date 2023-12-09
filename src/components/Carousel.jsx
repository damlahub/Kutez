import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';
import { products } from '../data';
import '../styles/fonts.css';
import { CarouselTitle } from './CarouselTitle';
import { Product } from './Product';
import { CarouselBtn } from './CarouselBtn';

export default function Carousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [numVisible, setNumVisible] = useState(calculateNumVisibleProducts());

  const visibleProducts = products.slice(startIndex, startIndex + numVisible);

  const handleRightArrowClick = () => {
    const newStartIndex = (startIndex + 1) % (products.length - numVisible + 1);
    setStartIndex(newStartIndex);
  };

  const handleLeftArrowClick = () => {
    const newStartIndex = startIndex > 0 ? startIndex - 1 : products.length - numVisible;
    setStartIndex(newStartIndex);
  };

  const [hoveredProductId, setHoveredProductId] = useState(null);

  const [productColors, setProductColors] = useState({});
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorOptionClick = (productId, color) => {
    let colorName;
    switch (color) {
      case 'yellow-option':
        colorName = 'Yellow Gold';
        break;
      case 'bronz-option':
        colorName = 'Bronz Gold';
        break;
      case 'white-option':
        colorName = 'White Gold';
        break;
      default:
        colorName = '';
    }
    setProductColors({ ...productColors, [productId]: colorName });
    setSelectedColors({ ...selectedColors, [productId]: colorName });
  };

  useEffect(() => {
    const initialColors = {};
    products.forEach((product) => {
      const colorName = 'Yellow Gold';
      initialColors[product.id] = colorName;
    });

    setProductColors(initialColors);
    setSelectedColors(initialColors);
  }, [products]);

  useEffect(() => {
    const handleResize = () => {
      setNumVisible(calculateNumVisibleProducts());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calculateNumVisibleProducts() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      return 4;
    } else if (windowWidth >= 768) {
      return 3;
    } else {
      return 2;
    }
  }

  return (
    <section id='carousel' className='mx-auto flex flex-col justifty-arround items-center'>
      <CarouselTitle title="Moissanite Engagement Rings" />
      <div className='mx-auto flex justifty-evenly items-center'>
        <div className='left-arrow' onClick={handleLeftArrowClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /> </svg>
        </div>
          <div className="products ">
            {visibleProducts.map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  productColors={productColors}
                  selectedColors={selectedColors}
                  hoveredProductId={hoveredProductId}
                  setHoveredProductId={setHoveredProductId}
                  handleColorOptionClick={handleColorOptionClick}
                />
              );
            })}
          </div>
        <div className='right-arrow' onClick={handleRightArrowClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <CarouselBtn />
    </section>
  );
}
