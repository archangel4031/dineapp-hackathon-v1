import React from "react";
import { ProductList } from "@/lib/mockups/MockProducts";
import ProductCard from "@/components/subcomponents/ProductCard";

export default function Products() {
    return (
        <section className="container mx-auto py-20">
            <div className="flex flex-col justify-center items-center">
                <p className="text-blue-500 font-semibold tracking-wide uppercase">
                    Products
                </p>
                <h1 className=" text-4xl font-extrabold tracking-wider">
                    Check What We Have
                </h1>
            </div>
            <div className="flex flex-row flex-wrap justify-around mt-4">
                {ProductList.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}
