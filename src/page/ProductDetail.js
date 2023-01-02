import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Yeon9628/hnm/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
    console.log(data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className='container'>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}/>
        </Col>
        <Col className='information'>
          <div className='product-title'>{product?.title}</div>
          <div className='product-price'>\{product?.price}</div>
          <div className='product-choice'>{product?.choice == true ? "Conscious choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic">사이즈 선택</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className='product-btn'>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;