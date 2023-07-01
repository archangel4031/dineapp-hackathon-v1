import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
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
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <ShoppingCart />
            </div>
        </div>
    );
}
