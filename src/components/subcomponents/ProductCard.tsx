import React from "react";
import Image from "next/image";
import { productInterface } from "@/lib/interfaces";
import Link from "next/link";

export default function ProductCard({
    title,
    price,
    image,
    imageAlt,
    category,
    slug,
    _id,
    className,
}: productInterface) {
    const style = "flex flex-col justify-center items-center gap-1";
    const propStyle = `${style} ${className}`;
    return (
        <div className={propStyle}>
            <Link href={`/products/${slug}`} key={_id}>
                <div className="relative w-80 h-96">
                    <Image src={image} alt={imageAlt} style={{ objectFit: "cover" }} fill={true} />
                </div>
                <h1 className="text-xl font-bold tracking-wide">{title}</h1>
                <p className="text-xl">$ {price}</p>
                <p className="capitalize">{category}</p>
            </Link>
        </div>
    );
}
