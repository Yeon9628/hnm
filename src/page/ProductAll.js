import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';

const ProductAll = () => {
  const productList = useSelector(state => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let SearchQuery = query.get('q') || "";
    dispatch(productAction.getProducts(SearchQuery));
  };

  useEffect (() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index) => (
            <Col lg={3} key={index}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll;