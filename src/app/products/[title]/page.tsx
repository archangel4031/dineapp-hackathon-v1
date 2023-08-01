import { getSingleProduct } from "@/../sanity/sanity-utils";

interface Props {
    params: { title: string };
}
export default async function Page({ params }: Props) {
    const slug = params.title;
    const project = await getSingleProduct(slug);

    return (
        <section className="container mx-auto py-20">
            <div className="grid grid-cols-4 grid-flow-row justify-around mt-4 gap-16">
                <p>This is the Details Page for = {project.title}</p>
                <p>Price = {project.price}</p>
                <p>Category = {project.category}</p>
            </div>
        </section>
    );
}
