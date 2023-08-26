"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productInterface } from "@/lib/interfaces";
import { useState } from "react";
import { useAppDispatch } from "@/lib/redux/store";
import { cartAction } from "@/lib/redux/features/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { urlForImage } from "sanity/lib/image";

interface Props {
    product: productInterface;
    userID: string;
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

    async function GetDataFromDB() {
        const res = await fetch(`/api/cart/${props.userID}`);
        if (!res.ok) {
            throw new Error("Failed to fetch Data");
        }

        const data = await res.json();
        return data;
    }

    async function handleAddToCart() {
        const res = await fetch(`/api/cart`, {
            method: "POST",
            // body: JSON.stringify({
            //     product_id: "req.product._id",
            //     product_name: "req.product_name",
            //     image: "req.image",
            //     price: 200,
            //     quantity: 5,
            //     total_price: 500,
            // }),
            body: JSON.stringify({
                product_id: product._id,
                product_name: product.title,
                // image: urlForImage(product.image).url(),
                image: product.image,
                price: product.price,
                quantity: qty,
                total_price: product.price * qty,
            }),
        });
    }

    async function handleCart() {
        try {
            const cartData = await GetDataFromDB();
            const existingItem = cartData.cartItems.find((item: any) => item._id === product._id);
            if (existingItem) {
                const newQuantity = existingItem.quantity + qty;
                const newTotalPrice = product.price * newQuantity;

                const res = await fetch(`/api/cart/`, {
                    method: "PUT",
                    body: JSON.stringify({
                        product_id: product._id,
                        quantity: newQuantity,
                        price: newTotalPrice,
                    }),
                });
                if (!res.ok) {
                    throw new Error("Failed to update Data");
                }
            } else {
                await handleAddToCart();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const AddToCart = () => {
        toast.promise(handleCart(), {
            loading: "Adding To Cart",
            success: "Product Added To Cart",
            error: "Failed to Add Product to Cart",
        });
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
            <Toaster />
        </div>
    );
}
