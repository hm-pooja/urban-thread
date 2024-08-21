import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
    items: string[];
}

const initialState: CategoryState = {
    items: [],
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        loadCategories: (state, action: PayloadAction<string[]>) => {
            state.items = action.payload;
        }
    }
})

export const {loadCategories} = categorySlice.actions;
export default categorySlice.reducer;