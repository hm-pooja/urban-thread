import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
    products: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        }
    }
})

export const {loadProducts} = productsSlice.actions;
export default productsSlice.reducer;