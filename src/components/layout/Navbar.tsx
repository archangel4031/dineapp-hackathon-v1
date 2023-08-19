import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/redux/store";

export default function Navbar() {
    const totalItems = useAppSelector((state) => state.cart.totalQuantity);

    return (
        <div className="flex flex-wrap justify-between items-center p-8 px-14">
            <div>
                <Link href={"/"}>
                    <Image
                        src={"/images/Logo.png"}
                        alt="Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                    />
                </Link>
            </div>
            <div className="flex gap-x-10">
                <Link href={"/category/female"}>Female</Link>
                <Link href={"/category/male"}>Male</Link>
                <Link href={"/category/kids"}>Kids</Link>
                <Link href={"/products"}>All Products</Link>
            </div>
            <div className="relative w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <ShoppingCart />
                <span className="absolute left-7 bottom-7 w-5 h-5 bg-[#f02d34] text-white text-xs rounded-full flex justify-center items-center">
                    {totalItems}
                </span>
            </div>
        </div>
    );
}
