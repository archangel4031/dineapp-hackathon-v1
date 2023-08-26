"use client";
import { productInterface } from "@/lib/interfaces";
import { useAppDispatch } from "@/lib/redux/store";
import { Toaster, toast } from "react-hot-toast";
import { cartAction } from "@/lib/redux/features/cartSlice";
import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";

interface Props {
    cartItem: productInterface;
}

const CartItemCard = ({ cartItem }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [qty, setQty] = useState(cartItem.quantity);
    const dispatch = useAppDispatch();

    const handleCart = async (newQty: number) => {
        setIsLoading(true);
        const newPrice = cartItem.price * newQty;

        try {
            if (newQty) {
                const res = await fetch(`http://localhost:3000/api/cart`, {
                    method: "PUT",
                    body: JSON.stringify({
                        product_id: cartItem._id,
                        quantity: newQty,
                        price: newPrice,
                    }),
                });
                if (!res.ok) {
                    throw new Error("Failed to update data");
                }
            } else {
                throw new Error("Failed to fetch update");
            }
        } catch (error) {
            console.log((error as { message: string }).message);
        }
        setIsLoading(false);
    };

    const handleDelete = async () => {
        await fetch(`/api/cart/?product_id=${cartItem._id}`, {
            method: "DELETE",
        });
    };

    const increament = () => {
        handleCart(qty + 1);
        setQty(qty + 1);
        dispatch(cartAction.addToCart({ product: cartItem, quantity: 1 }));
        toast.success("Product quantity Increased");
    };

    const decreament = () => {
        if (cartItem.quantity > 1) {
            handleCart(qty - 1);
            setQty(qty - 1);
            dispatch(cartAction.decrementCartProduct(cartItem._id));
            toast.success("Product quantity Decreased");
        }
    };

    const rmProduct = () => {
        handleDelete();
        dispatch(cartAction.removeProduct(cartItem._id));
        toast.success("Item Removed from Cart");
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center w-full px-5 py-7 gap-5 border-b border-gray-300 ">
            <div className="">
                <Image src={cartItem.image} alt={cartItem.title} width={250} height={250} className="rounded-md" />
            </div>
            <div className="flex flex-col justify-between items-start w-full">
                <div className="flex justify-between items-center w-80 sm:w-full flex-initial">
                    <h4>{cartItem.title}</h4>
                    <button onClick={rmProduct} disabled={isLoading}>
                        <Trash2 size={25} className="cursor-pointer" />
                    </button>
                </div>
                {/* <h5 className="font-semibold my-2 text-gray-400">{cartItem.subcat}</h5> */}
                <p className="flex flex-col gap-5 my-1 font-semibold text-base">
                    Delivery Estimation
                    <span className="text-yellow-500">5 Working Days</span>
                </p>
                <div className="flex justify-between items-center w-80 sm:w-full flex-initial">
                    <div>${cartItem.price * cartItem.quantity}</div>
                    <div className="flex justify-center items-center gap-5 text-2xl font-bold mt-8">
                        <p>Quantity:</p>
                        <button
                            onClick={decreament}
                            className="flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full"
                            disabled={isLoading}
                        >
                            -
                        </button>
                        {qty}
                        <button
                            onClick={increament}
                            className="flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full"
                            disabled={isLoading}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};
export default CartItemCard;
