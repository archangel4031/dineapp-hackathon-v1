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
                        <li className="rounded-full hover:cursor-pointer hover:shadow-gray-500 hover:text-red-500 hover:shadow-xl p-2">
                            XS
                        </li>
                        <li className="rounded-full hover:cursor-pointer hover:shadow-gray-500 hover:text-red-500 hover:shadow-xl p-2">
                            S
                        </li>
                        <li className="rounded-full hover:cursor-pointer hover:shadow-gray-500 hover:text-red-500 hover:shadow-xl p-2">
                            M
                        </li>
                        <li className="rounded-full hover:cursor-pointer hover:shadow-gray-500 hover:text-red-500 hover:shadow-xl p-2">
                            L
                        </li>
                        <li className="rounded-full hover:cursor-pointer hover:shadow-gray-500 hover:text-red-500 hover:shadow-xl p-2">
                            XL
                        </li>
                    </ul>
                    <p className="my-4">Quantity: 1</p>
                    <div className="flex gap-4 items-center my-4">
                        <Button>
                            <ShoppingCart /> ADD TO CART
                        </Button>
                        <p className="text-xl font-bold self-center">
                            $ {product.price}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
