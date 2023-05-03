import { Button, Divider } from '@mui/material';
import React from 'react'
import { useState } from 'react';

function DetailInfo() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className='detail-product-detail-info box-background'>
      <p style={{ fontWeight: 'bold', fontSize: '22px' }}>Sofa thư giãn Rouen</p>
      <div className='d-flex justify-content-between align-items-center'>
        <span>Thương hiệu: <b style={{ color: '#106F85' }}>Đang cập nhật</b></span>
      </div>
      <p style={{ color: '#106F85', fontWeight: 'bold', fontSize: '26px', margin: '15px 0 15px 0' }}>Liên hệ</p>
      <p>Sofa thư giãn Rouen được khoác lên mình màu Tobaco da thật, cùng các điểm nhấn mang tính cổ điển kết hợp hợp cùng chân kim loại Inox sáng bóng. Bạn có thể dễ dàng phối trong phòng khách, phòng ngủ hay phòng làm việc … Tăng lên nét tinh tế...</p>
      {/* <div className='d-flex align-items-center'>
        <span>Số lượng:</span>
        <div className='d-flex  align-items-center' style={{ background: 'white', padding: '5px 10px', marginLeft: '10px' }}>
          <span style={{ fontSize: '20px' }} onClick={() => setQuantity(quantity - 1)}>-</span>
          <span style={{ margin: '0 15px' }}>{quantity}</span>
          <span style={{ fontSize: '20px' }} onClick={() => setQuantity(quantity + 1)}>+</span>
        </div>
      </div> */}
      <Divider sx={{ margin: '15px 0' }} />
      <p>Gọi điện để được tư vấn: <span style={{ color: '#106F85', fontWeight: 'bold', fontSize: '18px' }}>0985016662</span></p>
    </div>
  )
}

export default DetailInfo