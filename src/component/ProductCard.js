import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const ShowDetail = () => {
    navigate(`/product/${item.id}`);
  }
  
  return (
    <div className='item' onClick={ShowDetail}>
      <img src={item?.img} />
      <div>{item?.choice == true ? "Conscious choice" : "　"}</div>
      <div className='title'>{item?.title}</div>
      <div className='price'>\{item?.price}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard;