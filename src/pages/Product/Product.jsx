import { Divider } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Home/components/Footer'
import FilterByPrice from './components/FilterByPrice'
import Main from './components/Main'
import MenuList from './components/MenuList'
import './product.style.css'
import { useState } from 'react';
function Product() {
  const [show, setShow] = useState(false);
  const handleCloseModal = () => {
    setShow(false);
  }
  const handleSubmit = () => {
    setShow(false);
  }
  const handleOpenModal = () => {
    setShow(true);
  }
  return (
    <div className='product primary-background'>
      <Divider />
      <Container>
        <Row>
          <Col sm='12' lg='3'>
            {/* <MenuList /> */}
            <FilterByPrice />
          </Col>
          <Col sm='12' lg='9'>
            <Main
              show={show}
              handleCloseModal={handleCloseModal}
              handleSubmit={handleSubmit}
              handleOpenModal={handleOpenModal}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Product