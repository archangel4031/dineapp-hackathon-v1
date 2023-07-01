import React from "react";
import { ProductList } from "@/lib/mockups/MockProducts";
import ProductCard from "@/components/subcomponents/ProductCard";

export default function Page() {
    return (
        <section className="container mx-auto py-20">
            <div className="grid grid-cols-4 grid-flow-row justify-around mt-4 gap-16">
                {ProductList.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}
