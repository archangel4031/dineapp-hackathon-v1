import { MakeURLFromTitle } from "@/lib/interfaces";
import { ProductList } from "@/lib/mockups/MockProducts";

export async function getServerSideProps(context: any) {
    console.log("ssprops", context.query);
    return {
        props: { query: context.query },
    };
}
function GetProductDetails(id: number) {
    return ProductList.filter((product) => product.id === id);
}

export default function Page({ params }: { params: any }) {
    console.log(params);
    // getServerSideProps(params);
    return (
        <section className="container mx-auto py-20">
            <div className="grid grid-cols-4 grid-flow-row justify-around mt-4 gap-16">
                <p>
                    This is the Details Page for{MakeURLFromTitle(params.title)}
                </p>
                <p>QUERY PARAMS={}</p>
            </div>
        </section>
    );
}
