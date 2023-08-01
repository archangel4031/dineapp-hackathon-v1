const productsSchema = {
    title: "Products",
    name: "products",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            title: "Price",
            name: "price",
            type: "number",
        },
        {
            title: "Image",
            name: "image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            title: "Category",
            name: "category",
            type: "string",
        },
    ],
};

export default productsSchema;
