import React, { Fragment, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Store } from '../store/context';
import { products } from '../assets/data/products';
import ProductCard from './ProductCard';
import Cart from './Cart';

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 100px;
`;

const CartWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    width: 100%
    height: 20%;
    background-color: #b4e9f2;
    position: absolute;
    bottom: 0;
`;

const ProductListingPage = () => {
  const { state } = useContext(Store);
  const { items, subtotal } = state;

  useEffect(() => {
    window.localStorage.setItem('initialState', JSON.stringify(state));
  }, [state]);

  return (
    <Fragment>
      <ProductsWrapper>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ProductsWrapper>
      <CartWrapper>
        <Cart items={items} subtotal={subtotal} />
      </CartWrapper>
    </Fragment>
  );
};

export default ProductListingPage;
