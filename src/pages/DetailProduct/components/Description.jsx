import { Divider } from '@mui/material'
import React from 'react'
import { useRef } from 'react';

function Description() {
  const windowWidth = useRef(window.innerWidth);
  return (
    <div style={{ width: windowWidth.current < 428 ? '100%' : '75%' }}>
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '22px' }}>Mô tả</p>
      <Divider />
      <div style={{margin: '20px 0 40px 0'}}>
        <p>Sofa thư giãn Rouen được khoác lên mình màu Tobaco da thật, cùng các điểm nhấn mang tính cổ điển kết hợp hợp cùng chân kim loại Inox sáng bóng.</p>
        <img width={windowWidth.current < 428 ? '100%' : '80%'} src='https://www.imgcomfort.com/us/-/media/imgsite/standaloneimageheadingteaserrichtext/aboutimg/spm360020banner.png?h=400&w=1024&la=en&hash=07C98C5313501B2E063D69FD8AB61493' />
      </div>
      <div style={{margin: '20px 0 40px 0'}}>
        <p>Đặc biệt: Sofa thư giãn Rouen có màu da trắng sáng, tạo điểm nhấn cho phòng khách với tone màu đen trắng. Dễ dàng phối màu với các nội thất trong gia đình bạn.</p>
        <img width={windowWidth.current < 428 ? '100%' : '80%'} src='https://edgelivingfurniture.com.au/assets/img/products/_1200x630_crop_center-center_82_none/space-3600-lifestyle-fabric.jpg?mtime=1622598788' />
      </div>
    </div>
  )
}

export default Description