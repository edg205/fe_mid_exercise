import React, { useEffect } from 'react';
import { reducer } from './reducer';

export const Store = React.createContext();

const initialState = {
  items: [],
  subtotal: 0,
};

const localState = JSON.parse(localStorage.getItem('state'));

export const StoreProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, localState || initialState);
  const value = { state, dispatch };

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
