import { type SchemaTypeDefinition } from "sanity";
import productsSchema from "./schemas/products-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [productsSchema],
};
