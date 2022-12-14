import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useStore } from '../context';
import { apartFrom, FormatMoney } from '../Helper/Helper';
import { ProductProps } from '../context/types';

const ViewProduct = () => {
  const { id } = useParams();

  const { products } = useStore();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string>();
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);
  const [images, setImages] = useState<string[]>();
  const [product, setProduct] = useState<ProductProps>({
    id: '',
    name: '',
    prices: [],
    description: '',
    images: [],
    gender: '',
    brand: '',
    isNew: true,
    isHot: true
  });

  const [index, setIndex] = useState<number>(0);

  const findProduct = () => {
    const found = products.find((item) => item.id === id);
    if (found) {
      const arrImage = [];
      found.prices.forEach((item) => {
        arrImage.push(item.image);
      });
      arrImage.push(...found.images);
      setImages(arrImage);
      setProduct(found);
    }
  };

  useEffect(() => {
    // @ts-ignore
    document.getElementById('detail').innerHTML = product.description;
    document.title = product.name;
  }, [product]);

  useEffect(() => {
    findProduct();
  }, [products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(0, images.length);

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
          block: 'end'
        });
      }
    }
  };

  const handleClick = (indx: number) => {
    setIndex(indx);
    setSelectedImage(product.prices[indx].image);
    setSelectedImageIndex(indx);
  };

  return (
    <div className="view">
      <div className="view__container grid">
        {isMobile && (
          <div className="view__title">
            <div className="view__title-thuonghieu">
              <a>{product.brand}</a>
              <div>
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-half-line" />
              </div>
            </div>
            <a>
              {product.name} <span>{product.gender}</span>
            </a>
          </div>
        )}
        <div className="container__view grid">
          <div className="view__image">
            <img
              src={'https://lh3.googleusercontent.com/d/' + selectedImage}
              alt={'???nh s???n ph???m'}
            />
            <div className="carousel">
              <div className="carousel__images">
                {images &&
                  images.map((image, idx) => (
                    <div
                      onClick={() => handleSelectedImageChange(idx)}
                      style={{
                        backgroundImage: `url(https://lh3.googleusercontent.com/d/${image})`
                      }}
                      key={idx}
                      className={`carousel__image ${
                        selectedImageIndex === idx && 'carousel__image-selected'
                      }`}
                      ref={(el) => (carouselItemsRef.current[idx] = el)}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="container__detail grid">
            {!isMobile && (
              <>
                <div className="view__title">
                  <div className="view__title-thuonghieu">
                    <a>
                      {product.name} <span>{product.gender}</span>
                    </a>
                  </div>
                  <div>
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-half-line" />
                  </div>
                </div>
                <div className="view__body">
                  <div>
                    Th????ng hi???u:{' '}
                    <Link
                      to={'/product?search=' + product.brand}
                      className="search"
                      style={{ fontSize: '17px' }}
                    >
                      {product.brand}
                    </Link>
                  </div>
                  <div>{product.name + ' ' + product.prices[index]?.capacity}</div>
                </div>
                <div className="view__price">
                  <p>
                    Gi??:{' '}
                    <span>
                      <FormatMoney price={product.prices[index]?.salePrice} />
                    </span>
                  </p>
                  <p className="view__price-thitruong">
                    Gi?? th??? tr?????ng: <FormatMoney price={product.prices[index]?.price} /> - Ti???t
                    ki???m: <FormatMoney price={apartFrom(product, index)} />
                  </p>
                  <small>
                    <strong className="text-danger">L??u ??</strong>: Vui l??ng ?????t h??ng qua messenger
                    tr??n Website. N???u messenger tr??n Website kh??ng ho???t ?????ng, vui l??ng truy c???p v??o
                    <a
                      target="_blank"
                      className="text-primary"
                      href="https://www.facebook.com/perfumeforyouvn"
                      rel="noreferrer"
                    >
                      {' '}
                      ?????a ch??? n??y!
                    </a>
                  </small>
                </div>
              </>
            )}
            {isMobile && (
              <div className="view__body">
                <div className="view__body-status">
                  <div>
                    <p>{product.name + ' ' + product.prices[index]?.capacity}</p>
                    <p className="title">
                      {product.prices[index]?.status ? 'c??n h??ng' : 'h???t h??ng'}
                    </p>
                  </div>
                  <div>
                    <p>
                      <FormatMoney price={product.prices[index]?.price} />
                    </p>
                    <p>
                      <FormatMoney price={product.prices[index]?.salePrice} />
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="view__policy">
              <div>
                <i className="ri-truck-line" />
                Free ship to??n qu???c
              </div>
              <div>
                <i className="ri-shield-check-line" />
                Ch??nh h??ng 100%
              </div>
              <div>
                <i className="ri-archive-line" />
                ?????i tr??? mi???n ph??
              </div>
            </div>
            <div>L???a ch???n size</div>

            <div className="view__standard">
              {product.prices.map((item: any, indx) => (
                <div
                  className={`view__standard-card ${index === indx && 'active'}`}
                  key={indx}
                  onClick={() => handleClick(indx)}
                >
                  <img src={'https://lh3.googleusercontent.com/d/' + item.image} />
                  <div className={`${!item.status && 'outProd'}`}>
                    {product.name + ' ' + item?.capacity}
                  </div>
                </div>
              ))}
            </div>
            {isMobile && (
              <div className="view__detail">
                <p>Chi ti???t s???n ph???m</p>
                <div id="detail"> </div>
              </div>
            )}
          </div>
        </div>
        {!isMobile && (
          <div className="view__detail">
            <p>Chi ti???t s???n ph???m</p>
            <div id="detail"> </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
