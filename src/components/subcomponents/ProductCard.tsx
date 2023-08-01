import React from "react";
import Image from "next/image";
import { CardProps, MakeURLFromTitle } from "@/lib/interfaces";
import Link from "next/link";

export default function ProductCard({
    title,
    price,
    imageSrc,
    imageAlt,
    category,
    id,
}: CardProps) {
    let url: string = MakeURLFromTitle(title);
    let url2: string = MakeURLFromTitle(imageSrc);
    return (
        <div className="flex flex-col gap-1">
            <Link
                href={{
                    pathname: `/products/[title]`,
                    query: {
                        item_id: title,
                    },
                }}
                as={`/products/${id}`}
            >
                <div className="relative w-80 h-96">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        style={{ objectFit: "cover" }}
                        fill={true}
                    />
                </div>
                <h1 className="text-2xl font-bold tracking-wide">{title}</h1>
                <p className="text-xl">{price}</p>
                <p className="capitalize">{category}</p>
            </Link>
        </div>
    );
}
