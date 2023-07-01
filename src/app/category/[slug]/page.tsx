import ProductCard from "@/components/subcomponents/ProductCard";
import { ProductList } from "@/lib/mockups/MockProducts";

function GetProductsByCategory(category: string) {
    return ProductList.filter((product) => product.category === category);
}

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <section className="container mx-auto py-20">
            <div className="grid grid-cols-4 grid-flow-row justify-around mt-4 gap-16">
                {GetProductsByCategory(params.slug).length > 0 ? (
                    GetProductsByCategory(params.slug).map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                ) : (
                    <p className="text-3xl font-semibold">No Products Found</p>
                )}
            </div>
        </section>
    );
}
