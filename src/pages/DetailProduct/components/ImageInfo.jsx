import React, { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import '../detailProduct.style.css';
import { useRef } from 'react';

function ImageInfo() {
  const windowWidth = useRef(window.innerWidth);
  const [imgShow, setImgShow] = useState('https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200')
  const props = { width: 400, height: 300, zoomLensStyle: 'border: 1px solid gray; opacity: 0.5; background-color: white', zoomStyle: 'border: 3px solid gray', img: imgShow };
  return (
    <div style={{ zIndex: '200', marginRight: windowWidth.current < 428 ? 0 : '20px' }}>
      {windowWidth.current < 428 ? <img style={{width: '100%'}} src={imgShow} alt='#' /> : <ReactImageZoom {...props} className='react-image-zoom'/>}
      <div className='d-flex justify-content-center align-items-center' style={{marginTop: '25px', marginBottom: windowWidth.current < 428 ? '20px' : '0'}}>
        <img onClick={()=> setImgShow('https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200')} style={{width: '80px', height: '70px', border: '1px solid gray'}} src='https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200' alt='#' />
        <img onClick={()=> setImgShow('https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/2-ee8af1ef-b0c8-417b-a501-62f0f218ae6b.jpg?v=1575349159530')} style={{width: '80px', height: '70px', border: '1px solid gray', margin: '0 20px'}} src='https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/2-ee8af1ef-b0c8-417b-a501-62f0f218ae6b.jpg?v=1575349159530' alt='#' />
        <img onClick={()=> setImgShow('https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/28.jpg?v=1572418508650')} style={{width: '80px', height: '70px', border: '1px solid gray'}} src='https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/28.jpg?v=1572418508650' alt='#' />
      </div>
    </div>
  )
}

export default ImageInfo