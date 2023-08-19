import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/*
Via Codeium:
By creating these custom hooks, you can use them within your Next.js 
components to interact with the Redux store in a type-safe manner.
For example, you can use useAppDispatch to dispatch actions and useAppSelector to
select data from the store, all while benefiting from TypeScript's static type checking.
*/

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
