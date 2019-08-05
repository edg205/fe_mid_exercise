import React from 'react';
import styled from 'styled-components';
import { Store } from '../store/context';
import QuantityPicker from './QuantityPicker';

const Circle = styled.div`
  position: absolute;
  background-color: #f7f7f7;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  z-index: -1;
`;

const Image = styled.img`
  height: 215px;
  transform: rotate(-45deg);
`;

const ImageWrapper = styled.div`
  padding: 0 36px 0 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 215px;
  height: 215px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const NameText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const PriceText = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: #9b9b9b;
`;

const ProductCard = ({ item }) => {
  const {
    state: { items },
    dispatch,
  } = React.useContext(Store);
  const { name, price, image, altText } = item;
  const { quantity } = items.find(e => e.id === item.id) || 0;

  const handleChange = e => {
    const op = e.target.name;
    if (op === 'decrement') {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { item, quantity } });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { item, quantity } });
    }
    dispatch({ type: 'UPDATE_SUBTOTAL' });
  };

  return (
    <ProductWrapper>
      <ImageWrapper>
        <Circle />
        <Image src={image} alt={altText} />
      </ImageWrapper>
      <NameText>{name}</NameText>
      <PriceText>{`$${price / 100}`}</PriceText>
      <QuantityPicker quantity={quantity || 0} handleChange={handleChange} />
    </ProductWrapper>
  );
};

export default ProductCard;
