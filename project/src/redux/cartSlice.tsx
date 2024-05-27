import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../data/types';


interface CartState {
  items: Item[];
  alertVisible: boolean;
}

const initialState: CartState = {
  items: [],
  alertVisible: false,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const exists = state.items.some(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        state.alertVisible = true;
      }
      
    },
      
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    hideAlert: (state) => {
      state.alertVisible = false; 
    },
  },
});

export const { addItem, removeItem, hideAlert } = cartSlice.actions;
export default cartSlice.reducer;

