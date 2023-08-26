import { addToCart, cartTable, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const user_id = "123";
    const req: addToCart = await request.json();
    // console.log(req);

    try {
        if (req) {
            await db
                .insert(cartTable)
                .values({
                    user_id: user_id,
                    product_id: req.product_id,
                    product_name: req.product_name,
                    image: req.image,
                    price: req.price,
                    quantity: req.quantity,
                    total_price: req.total_price,
                })
                .returning();
            return NextResponse.json({ Message: "Data Added to DB" }, { status: 200 });
        } else {
            throw new Error("Failed to add data to DB");
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ Message: error }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    const user_id = "123";
    const data: addToCart = await request.json();

    try {
        if (data) {
            await db
                .update(cartTable)
                .set({
                    quantity: data.quantity,
                    total_price: data.price,
                })
                .where(and(eq(cartTable.user_id, user_id), eq(cartTable.product_id, data.product_id)))
                .returning();

            return NextResponse.json({ Message: "Data Updated" }, { status: 200 });
        } else {
            throw new Error("Failed to update data");
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ Message: error }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    const url = request.nextUrl;
    const user_id = "123";
    try {
        if (url.searchParams.has("product_id") && user_id) {
            const product_id = url.searchParams.get("product_id");
            const res = await db
                .delete(cartTable)
                .where(and(eq(cartTable.user_id, user_id), eq(cartTable.product_id, product_id as string)));
            return NextResponse.json({ Message: "Data Deleted" }, { status: 200 });
        } else {
            if (!user_id) {
                throw new Error("user_id is required");
            }
            throw new Error("product_id is required");
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ Message: error }, { status: 405 });
    }
}
