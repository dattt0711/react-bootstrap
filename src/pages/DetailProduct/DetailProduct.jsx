import React from 'react';
import './detailProduct.style.css';
import { Container } from 'react-bootstrap';
import DetailInfo from './components/DetailInfo';
import ImageInfo from './components/ImageInfo';
import ProductInCategory from './components/ProductInCategory';
import Description from './components/Description';
import CarouselProduct from '../Home/components/CarouselProduct';
import Footer from '../Home/components/Footer';

function DetailProduct() {
  return (
    <div className='detail-product'>
      <Container >
        <div className='info-component d-flex '>
          <ImageInfo />
          <DetailInfo />
        </div>
        <div className='describe-component d-flex justify-content-between' style={{ marginTop: '100px' }}>
          <Description />
          <ProductInCategory />
        </div>
        <CarouselProduct name={'CÓ THỂ BẠN QUAN TÂM'} />
      </Container>
      <Footer />
    </div>
  )
}

export default DetailProduct