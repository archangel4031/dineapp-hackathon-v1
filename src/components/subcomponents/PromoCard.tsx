import React from "react";
import Image from "next/image";
import { CardProps } from "@/lib/interfaces";

export default function PromoCard({
    title,
    price,
    discounted,
    imageSrc,
    imageAlt,
    className,
}: CardProps) {
    return (
        <div
            className={`flex flex-col gap-y-2 justify-between items-center ${className}`}
        >
            <div className="mt-4 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold text-center">{title}</h2>
                <p>
                    <span className="line-through">{price}</span>{" "}
                    <span className="font-bold">{discounted}</span>
                </p>
            </div>
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={0}
                height={0}
                sizes="15vw"
                style={{ width: "auto", height: "auto" }}
            />
        </div>
    );
}
