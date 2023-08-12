import React from "react";
import { getProducts } from "@/../sanity/sanity-utils";
import ProductCard from "@/components/subcomponents/ProductCard";

export default async function Page() {
    const products = await getProducts();
    return (
        <section className="container mx-auto py-20">
            <div className="grid grid-cols-4 grid-flow-row justify-around mt-4 gap-16">
                {products.map((product) => (
                    <ProductCard
                        className="hover:scale-105 transition duration-300 ease-in-out"
                        key={product._id}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
}
