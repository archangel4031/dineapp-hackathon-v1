import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PromoCard from "@/components/subcomponents/PromoCard";

export default function Promotions() {
    return (
        <section>
            <div className="flex flex-col justify-center items-center">
                <p className="text-blue-500 font-semibold tracking-wide uppercase">
                    Promotions
                </p>
                <h1 className=" text-4xl font-extrabold tracking-wider">
                    Our Promotion Events
                </h1>
            </div>
            <div className="flex mx-auto py-20">
                {/* Horizontal Cards */}
                <div className="grid grid-rows-2 gap-4 mx-4 w-3/4">
                    {/* First Image Card */}
                    <div className="bg-gray-300 h-48 px-10 flex flex-row justify-between items-center">
                        <div>
                            <h2 className="scroll-m-20 text-4xl font-bold tracking-wide">
                                Get up to 60%
                            </h2>
                            <p className="text-xl">For the summer season</p>
                        </div>
                        <div className="relative h-full w-64">
                            <Image
                                src="/images/event1.webp"
                                alt="Event 1"
                                fill={true}
                                style={{ objectFit: "fill" }}
                            />
                        </div>
                    </div>
                    {/* Second Image Card */}
                    <div className="bg-gray-900 text-white h-48 flex flex-col justify-center items-center">
                        <h2 className="scroll-m-20 text-4xl font-bold tracking-wide mb-3">
                            Get 30% Off
                        </h2>
                        <p className="text-xl">Use Promo Code</p>
                        <Button
                            variant="secondary"
                            className="tracking-widest uppercase text-xl text-white font-bold bg-zinc-700"
                        >
                            DINEWEEKENDSALE
                        </Button>
                    </div>
                </div>
                {/* Vertical Cards */}
                <div className="grid grid-cols-2 w-1/4 gap-4 mx-4">
                    <PromoCard
                        id={1}
                        title="Flex SweatShirt"
                        price="$200"
                        discounted="$100"
                        imageSrc="/images/event2.webp"
                        imageAlt="Event 2"
                        category="male"
                        className="bg-orange-200"
                    />
                    <PromoCard
                        id={2}
                        title="Flex Bomber"
                        price="$400"
                        discounted="$300"
                        imageSrc="/images/event3.webp"
                        imageAlt="Event 3"
                        category="male"
                        className="bg-stone-500"
                    />
                </div>
            </div>
        </section>
    );
}
