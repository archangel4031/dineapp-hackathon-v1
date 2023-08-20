import ProductCard from "@/components/subcomponents/ProductCard";
import { getProducts } from "@/../sanity/sanity-utils";

export default async function Page({ params }: { params: { slug: string } }) {
    const products = await getProducts();
    const categoryProducts = products.filter((product) => product.category.toLowerCase() === params.slug);
    // console.log("SLUG =", params.slug);
    // console.log("CAT PROD", categoryProducts);
    return (
        <section className="container md:mx-auto py-20">
            <div className="grid md:grid-cols-4 grid-cols-1 md:grid-flow-row justify-around mt-4 gap-16">
                {categoryProducts.length > 0 ? (
                    categoryProducts.map((products) => (
                        <ProductCard
                            className="hover:scale-105 transition duration-300 ease-in-out"
                            key={products._id}
                            {...products}
                        />
                    ))
                ) : (
                    <p className="text-3xl font-semibold">No Products Found</p>
                )}
            </div>
        </section>
    );
}
