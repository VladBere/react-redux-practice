import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ShoppingItem {
  id: number;
  title: string;
  isBought: boolean;
}

export interface ProductsState {
  value: ShoppingItem[]
}

const initialState: ProductsState = {
  value: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setTobuyProducts: (state, action: PayloadAction<ShoppingItem>) => {
      state.value.push(action.payload)
    },
    resetTobuyProducts: (state, action: PayloadAction<ShoppingItem[]>) => {
      state.value = action.payload
    }
  },
})

export const { setTobuyProducts, resetTobuyProducts } = productSlice.actions

export default productSlice.reducer