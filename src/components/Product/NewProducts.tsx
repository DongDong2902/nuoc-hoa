import React from 'react';
import CarouselProd from './Carousel/CarouselProd';

const NewProducts: React.FC = () => {
  return (
    <div>
      <h2 className="section__title-center">Sản Phẩm Mới</h2>
      <div className="product__carousel">
        <CarouselProd />
      </div>
    </div>
  );
};

export default NewProducts;
