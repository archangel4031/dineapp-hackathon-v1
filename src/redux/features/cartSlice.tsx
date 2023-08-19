import { CartState } from "@/lib/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { productInterface } from "@/lib/interfaces";

const initialState: CartState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

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
            const existingItem: productInterface | undefined = state.cartItems.find((item) => item._id === newItem._id);
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
                const totalPrice = existingItem.totalPrice + existingItem.price * action.payload.quantity;
                existingItem.quantity += action.payload.quantity;
                existingItem.totalPrice += totalPrice;
            }
        },

        removeProduct(state: CartState, action: PayloadAction<string>) {
            const productID = action.payload;
            state.cartItems = state.cartItems.filter((item) => item._id !== productID);
            state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cartItems.reduce((total, item) => total + item.totalPrice, 0);
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
                existingItem!.totalPrice = existingItem!.totalPrice - existingItem?.price!;
            }
        },
    },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
