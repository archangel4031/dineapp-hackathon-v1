"use client";
import CartItemCard from "@/components/subcomponents/CartItemsCard";
import Wrapper from "@/components/sections/CartWrapper";
import { useAppSelector } from "@/lib/redux/store";
import Link from "next/link";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import StripeCheckoutButton from "@/components/subcomponents/StripeCheckoutButton";

export default function CartPage() {
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    const totalItems = useAppSelector((state) => state.cart.totalQuantity);
    const totalPrice = useAppSelector((state) => state.cart.totalPrice);

    if (cartItems.length > 0) {
        return (
            <Wrapper>
                <h3>Shopping Cart</h3>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-x-5 px-5">
                    <div className="basis-3/4">
                        {cartItems.map((item) => (
                            <CartItemCard key={item._id} cartItem={item} />
                        ))}
                    </div>
                    <div className="basis-1/4 bg-gray-200 rounded-md w-full h-full  mt-5 sm:mt-0 p-2 self-start">
                        <div className="flex flex-col items-center justify-between gap-5">
                            <h4>Order Summary</h4>
                            <div className="flex justify-between items-center w-full">
                                <div>
                                    <p>Quantity</p>
                                </div>
                                <div>
                                    <p>{totalItems}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <div>
                                    <p>Total Amount</p>
                                </div>
                                <div>
                                    <p>${totalPrice}</p>
                                </div>
                            </div>
                            <div>
                                <StripeCheckoutButton products={cartItems} />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper>
                <h3>Shopping Cart</h3>

                <div className="flex flex-col w-full gap-10 h-full justify-center items-center">
                    <ShoppingBag size={200} />
                    <h1>Your shopping bag is empty</h1>
                    <Link
                        href="/products"
                        className="flex justify-center items-center gap-3 border border-gray-300 rounded-sm bg-[#212121] text-white py-2 px-3"
                    >
                        <ShoppingCart size={25} /> Start Shopping
                    </Link>
                </div>
            </Wrapper>
        );
    }
}
