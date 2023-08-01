import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "../sanity/env";
import { productInterface } from "@/lib/interfaces";

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
        "imageAlt": image.alt,
        category,
        }`
    );
}

export async function getSingleProduct(
    slug: string
): Promise<productInterface> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "products" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        price,
        "image": image.asset->url,
        "imageAlt": image.alt,
        category,
        }`,
        { slug }
    );
}
