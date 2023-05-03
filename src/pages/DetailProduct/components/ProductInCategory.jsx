import { Divider, Stack } from '@mui/material'
import React from 'react'
import { useRef } from 'react';

function ProductInCategory() {
  const windowWidth = useRef(window.innerWidth);
  return (
    <div>
      <p style={{fontWeight: 'bold'}}>SẢN PHẨM CÙNG LOẠI</p>
      <Divider />
      <Stack direction={'column'} gap={2} sx={{padding: windowWidth.current < 428 ? '0 25px' : '0'}}>
        <div className='product-in-category d-flex justify-content-between align-items-center' style={{padding: '7px'}}>
          <img width={'80px'} src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214000' alt='#'/>
          <div style={{marginLeft: '30px'}}>
            <p style={{margin: '10px 0', fontWeight: 500}}>Sofa thư giãn Rouen</p>
            <p style={{margin: '10px 0', fontWeight: 'bold', color: '#106F85'}}>23.900.000₫</p>
          </div>
        </div>
        <div className='product-in-category d-flex justify-content-between align-items-center' style={{padding: '7px'}}>
          <img width={'80px'} src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214000' alt='#'/>
          <div style={{marginLeft: '30px'}}>
            <p style={{margin: '10px 0', fontWeight: 500}}>Sofa thư giãn Rouen</p>
            <p style={{margin: '10px 0', fontWeight: 'bold', color: '#106F85'}}>23.900.000₫</p>
          </div>
        </div>
        <div className='product-in-category d-flex justify-content-between align-items-center' style={{padding: '7px'}}>
          <img width={'80px'} src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214000' alt='#'/>
          <div style={{marginLeft: '30px'}}>
            <p style={{margin: '10px 0', fontWeight: 500}}>Sofa thư giãn Rouen</p>
            <p style={{margin: '10px 0', fontWeight: 'bold', color: '#106F85'}}>23.900.000₫</p>
          </div>
        </div>
      </Stack>
    </div>
  )
}

export default ProductInCategory;