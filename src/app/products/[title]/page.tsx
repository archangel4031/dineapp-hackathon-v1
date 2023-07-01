import { MakeURLFromTitle } from "@/lib/interfaces";
import { ProductList } from "@/lib/mockups/MockProducts";

function GetProductDetails(id: number) {
    return ProductList.filter((product) => product.id === id);
}

export default function Page({ params }: { params: any }) {
    console.log(params);
    return (
        <section className="container mx-auto py-20">
            <div className="grid grid-cols-4 grid-flow-row justify-around mt-4 gap-16">
                This is the Details Page for {MakeURLFromTitle(params.title)}
            </div>
        </section>
    );
}
