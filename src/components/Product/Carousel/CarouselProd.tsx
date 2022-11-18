import React from 'react';
import Carousel from 'react-multi-carousel';
import Product from '../Product';
import { ProductProps } from '../../../context/types';
import { useStore } from '../../../context';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2
  }
};

const CarouselProd = () => {
  const { products } = useStore();

  return (
    <Carousel
      swipeable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={true}
      autoPlaySpeed={1000}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      renderDotsOutside={true}
    >
      {products?.map((item) => {
        if (item.isNew) {
          return (
            <div className="product__carousel__card" key={item.id}>
              <Product {...item} />
            </div>
          );
        }
      })}
    </Carousel>
  );
};

export default CarouselProd;
