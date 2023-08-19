import { getSingleProduct } from "@/../sanity/sanity-utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface Props {
    params: { title: string };
}
export default async function Page({ params }: Props) {
    const slug = params.title;
    const product = await getSingleProduct(slug);

    return (
        <section className="container mx-auto py-20">
            <div className="flex flex-row justify-around items-stretch mt-4 gap-8">
                <div className="relative w-full h-screen">
                    <Image
                        src={product.image}
                        alt={product.imageAlt}
                        style={{ objectFit: "contain" }}
                        fill={true}
                    />
                </div>
                <div className="w-1/3">
                    <h1 className="my-4 text-3xl font-bold tracking-widest">
                        {product.title}
                    </h1>
                    <p className="my-4 capitalize text-xl text-gray-700">
                        {product.category}
                    </p>
                    <p className="my-4 text-lg font-bold">Select Size</p>
                    <ul className="flex flex-row gap-8 justify-items-center font-bold text-gray-500">
                        <li className="rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-gray-500 hover:text-red-500 hover:shadow-xl p-2 w-12 h-12">
                            XS
                        </li>
                        <li className="rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-gray-500 hover:text-red-500 hover:shadow-xl p-2 w-12 h-12">
                            S
                        </li>
                        <li className="rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-gray-500 hover:text-red-500 hover:shadow-xl p-2 w-12 h-12">
                            M
                        </li>
                        <li className="rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-gray-500 hover:text-red-500 hover:shadow-xl p-2 w-12 h-12">
                            L
                        </li>
                        <li className="rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-gray-500 hover:text-red-500 hover:shadow-xl p-2 w-12 h-12">
                            XL
                        </li>
                    </ul>
                    <div className="flex gap-4 items-center my-4">
                        <p>Quantity:</p>

                        <p className="border border-gray-800 rounded-full flex justify-center items-center w-9 h-9 cursor-pointer">
                            -
                        </p>
                        {/* <p>{quantity}</p> */}
                        <p className="border border-gray-800 rounded-full flex justify-center items-center w-9 h-9 cursor-pointer">
                            +
                        </p>
                    </div>
                    <div className="flex gap-4 items-center my-4">
                        <Button className="px-4 py-6">
                            <ShoppingCart className="mx-4" /> ADD TO CART
                        </Button>
                        <p className="text-2xl font-bold self-center">
                            $ {product.price}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
