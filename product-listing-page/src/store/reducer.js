const addToCart = (state, action) => {
  const { items } = state;
  const { item, quantity } = action.payload;
  const index = items.findIndex(e => e.id === item.id);
  return {
    ...state,
    items: index !== -1 ? updateQuantity(items, index, quantity + 1) : [...items, { ...item, quantity: 1 }],
  };
};

const removeFromCart = (state, action) => {
  const { items } = state;
  const { item, quantity } = action.payload;
  const index = items.findIndex(e => e.id === item.id);
  return {
    ...state,
    items:
      items[index].quantity === 1 ? items.filter(e => e.id !== item.id) : updateQuantity(items, index, quantity - 1),
  };
};

const updateSubtotal = (state, action) => {
  const { items } = state;
  return {
    ...state,
    subtotal: items.reduce((sum, curr) => (sum += parseInt(curr.price, 10) * curr.quantity), 0),
  };
};

const updateQuantity = (arr, index, newQuantity) => {
  const newArr = arr.slice();
  newArr[index].quantity = newQuantity;
  return newArr;
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action);
    case 'REMOVE_FROM_CART':
      return removeFromCart(state, action);
    case 'UPDATE_SUBTOTAL':
      return updateSubtotal(state, action);
    default:
      return state;
  }
};
