import React from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

export default function Hero() {
    return (
        <section className="container mx-auto py-20 flex flex-col md:flex-row items-center justify-center gap-20">
            <div className="">
                <Badge className="rounded-sm px-6 py-2 bg-blue-200 hover:bg-blue-200 text-blue-700 text-base mb-8">
                    Sale 70%
                </Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl">
                    An Industrial Take on Streetwear
                </h1>
                <p className="leading-7 mt-6 text-gray-500 text-xl">
                    Anyone can beat you but no one can beat your outfit as long
                    as you wear Dine outfits.
                </p>
                <Button className="rounded-none border-slate-400 border-2 py-6 px-12 text-lg mt-6">
                    <ShoppingCart className="mr-2 h-6 w-6" />
                    Start Shopping
                </Button>
                <div className="grid grid-cols-4 gap-4 mt-16">
                    <Image
                        src="/images/Featured1.webp"
                        alt="Feature 1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                    />
                    <Image
                        src="/images/Featured2.webp"
                        alt="Feature 2"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                    />
                    <Image
                        src="/images/Featured3.webp"
                        alt="Feature 3"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                    />
                    <Image
                        src="/images/Featured4.webp"
                        alt="Feature 4"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                    />
                </div>
            </div>
            <div className="bg-orange-100 rounded-full">
                <Image
                    src={"/images/header.png"}
                    alt="Hero Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                />
            </div>
        </section>
    );
}
