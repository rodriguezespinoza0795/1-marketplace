import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartState {
    id: string | number,
    name: string,
    image: string,
    info: string,
}

// Define the initial state using that type
const initialState: CartState[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTocart: (state, action: PayloadAction<CartState>) => {},
    removeToCart: () => {}

  },
})

export const {  } = cartSlice.actions
