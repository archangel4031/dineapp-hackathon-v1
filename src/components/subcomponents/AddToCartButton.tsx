"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productInterface } from "@/lib/interfaces";
import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { cartAction } from "@/redux/features/cartSlice";

interface Props {
    product: productInterface;
}
// This is another approach to pass props
// export default function AddToCartButton({ product }: { product: productInterface }) {

export default function AddToCartButton(props: Props) {
    const product = props.product;
    const [qty, setQty] = useState(1);
    const dispatch = useAppDispatch();

    function AddQty() {
        setQty(qty + 1);
    }

    function SubQty() {
        if (qty > 1) {
            setQty(qty - 1);
        }
    }

    const AddToCart = () => {
        dispatch(cartAction.addToCart({ product, quantity: qty }));
    };
    return (
        <div>
            <div className="flex gap-4 items-center my-4">
                <div className="text-2xl font-bold">Quantity:</div>
                <div className="text-2xl font-bold">{qty}</div>
            </div>
            <div className="flex gap-8 items-center my-4">
                <div
                    className="border border-gray-800 rounded-full flex justify-center items-center w-9 h-9 cursor-pointer"
                    onClick={SubQty}
                >
                    -
                </div>
                <div
                    className="border border-gray-800 rounded-full flex justify-center items-center w-9 h-9 cursor-pointer"
                    onClick={AddQty}
                >
                    +
                </div>
            </div>
            <div className="flex gap-4 items-center my-4">
                <Button onClick={AddToCart} className="px-4 py-6">
                    <ShoppingCart className="mx-4" /> ADD TO CART
                </Button>
                <p className="text-2xl font-bold self-center">$ {product.price}</p>
            </div>
        </div>
    );
}
