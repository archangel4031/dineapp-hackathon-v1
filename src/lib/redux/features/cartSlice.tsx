import { CartState } from "@/lib/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { productInterface } from "@/lib/interfaces";

const initialState: CartState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
    isLoading: false,
    error: null,
};

export const fetchData = createAsyncThunk("cart/fetchData", async (userId: string) => {
    const res = await fetch(`/api/cart/${userId}`);
    if (!res.ok) {
        console.log("Failed to fetch data");
    }
    const data = await res.json();
    return data;
});

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(
            state: CartState,
            action: PayloadAction<{
                product: productInterface;
                quantity: number;
            }>
        ) {
            const newItem = action.payload.product;
            const existingItem = state.cartItems.find((item) => item._id === newItem._id);
            state.totalQuantity += action.payload.quantity;
            state.totalPrice += newItem.price * action.payload.quantity;
            const totalPrice = newItem.price * action.payload.quantity;

            if (!existingItem) {
                state.cartItems.push({
                    ...newItem,
                    quantity: action.payload.quantity,
                    totalPrice,
                });
            } else {
                const totalPrice = existingItem.totalPrice || 0 + existingItem.price * action.payload.quantity;
                existingItem.quantity += action.payload.quantity;
                existingItem.totalPrice = existingItem.totalPrice || 0 + totalPrice;
            }
        },

        removeProduct(state: CartState, action: PayloadAction<string>) {
            const productID = action.payload;
            state.cartItems = state.cartItems.filter((item) => item._id !== productID);
            state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cartItems.reduce((total, item) => total + (item.totalPrice || 0), 0);
        },

        decrementCartProduct(state: CartState, action: PayloadAction<string>) {
            const Product = action.payload;
            const existingItem = state.cartItems.find((item) => item._id === Product);
            state.totalQuantity--;
            state.totalPrice = state.totalPrice - existingItem?.price!;

            if (existingItem?.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item._id !== Product);
            } else {
                existingItem!.quantity--;
                existingItem!.totalPrice = existingItem!.totalPrice || 0 - existingItem?.price!;
            }
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchData.fulfilled, (state, action) => {
            const { cartItems, totalQuantity, totalPrice } = action.payload;
            state.cartItems = cartItems;
            state.totalPrice = totalPrice;
            state.totalQuantity = totalQuantity;
            state.isLoading = false;
        });

        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
