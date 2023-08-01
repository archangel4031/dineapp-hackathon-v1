import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "../sanity/env";
import { productInterface } from "@/components/interfaces/product-iInterface";

const clientConfig = {
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
};

export async function getProducts(): Promise<productInterface[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "products"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        price,
        "image": image.asset->url,
        category,
      }`
    );
}
