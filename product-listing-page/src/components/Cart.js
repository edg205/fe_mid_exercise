import React, { Fragment } from 'react';
import styled from 'styled-components';

const SubtotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartText = styled.span`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  width: 150px;
`;

const CheckoutButton = styled.button`
  background-color: ${props => (props.disabled ? '#9b9b9b' : '#ff6241')};
  opacity: ${props => (props.disabled ? '0.2' : '1')};
  color: #fff;
  font-size: 2rem;
  padding: 24px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
`;

const Cart = ({ items, subtotal }) => {
  const totalItems = items.reduce((a, c) => a + c['quantity'], 0);
  return (
    <Fragment>
      <CartText>Cart ({totalItems})</CartText>
      <SubtotalWrapper>
        <CartText>Subtotal</CartText>
        <CartText>{subtotal === 0 ? `$0.00` : `$${subtotal / 100}`}</CartText>
      </SubtotalWrapper>
      <CheckoutButton disabled={items.length === 0 ? true : false}>Proceed to Checkout</CheckoutButton>
    </Fragment>
  );
};

export default Cart;
