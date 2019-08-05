import React from 'react';
import styled from 'styled-components';

const PickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

const Picker = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  font-size: 2rem;
  color: #ff6241;
  margin: 0 15px 0 15px;
  border: 2px solid #ff6241;
  line-height: 15px;
`;

const QuantityText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  width: 15px;
  height: 15px;
`;

const QuantityPicker = ({ quantity, handleChange }) => {
  return (
    <PickerWrapper>
      <Picker name="decrement" type="button" disabled={quantity === 0} onClick={e => handleChange(e)}>
        -
      </Picker>
      <QuantityText>{quantity}</QuantityText>
      <Picker name="increment" type="button" onClick={e => handleChange(e)}>
        +
      </Picker>
    </PickerWrapper>
  );
};

export default QuantityPicker;
