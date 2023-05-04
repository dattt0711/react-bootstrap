import { Divider } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
function DetailInfo() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className='detail-product-detail-info box-background'>
      <p style={{ fontWeight: 'bold', fontSize: '22px' }}>Sofa thư giãn Rouen</p>
      <div className='d-flex justify-content-between align-items-center'>
        <span>Thương hiệu: <b className="color-green">Đang cập nhật</b></span>
      </div>
      <p className="color-green" style={{ color: '#106F85', fontWeight: 'bold', fontSize: '26px', margin: '15px 0 15px 0' }}>Liên hệ</p>
      <p>Sofa thư giãn Rouen được khoác lên mình màu Tobaco da thật, cùng các điểm nhấn mang tính cổ điển kết hợp hợp cùng chân kim loại Inox sáng bóng. Bạn có thể dễ dàng phối trong phòng khách, phòng ngủ hay phòng làm việc … Tăng lên nét tinh tế...</p>
      {/* <div className='d-flex align-items-center'>
        <span>Số lượng:</span>
        <div className='d-flex  align-items-center' style={{ background: 'white', padding: '5px 10px', marginLeft: '10px' }}>
          <span style={{ fontSize: '20px' }} onClick={() => setQuantity(quantity - 1)}>-</span>
          <span style={{ margin: '0 15px' }}>{quantity}</span>
          <span style={{ fontSize: '20px' }} onClick={() => setQuantity(quantity + 1)}>+</span>
        </div>
      </div> */}
      <Divider sx={{ margin: '10px 0' }} />
      <p>Gọi điện để được tư vấn: <span className="color-green" style={{ color: '#106F85', fontWeight: 'bold', fontSize: '18px' }}>0985016662</span></p>
      <div style={{ marginTop: '30px' }}>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" className="btn">
            <RemoveIcon />
          </Button>
          <Button variant="secondary" className="btn">1</Button>
          <Button variant="secondary" className="btn">
            <AddIcon />
          </Button>
        </ButtonGroup>
      </div>
    </div >
  )
}

export default DetailInfo