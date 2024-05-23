import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, CartState } from '../data/types';

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem: (state, action: PayloadAction<Item>) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action: PayloadAction<{ id: number }>) => {
//       state.items = state.items.filter(item => item.id !== action.payload.id);
//     },
//   },
// });

// export const { addItem, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;



const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      console.log('Adding item to cart:', action.payload);
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;