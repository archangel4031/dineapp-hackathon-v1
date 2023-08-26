import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { productInterface } from "@/lib/interfaces";

interface Params {
    userID: string;
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
    try {
        if (!params.userID) {
            throw new Error("userID is required");
        } else {
            const res = await db.select().from(cartTable).where(eq(cartTable.user_id, params.userID));
            const cartItems = res.map((items) => ({
                _id: items.product_id,
                title: items.product_name,
                image: items.image,
                price: items.price,
                quantity: items.quantity,
                totalPrice: items.total_price,
                user_id: items.user_id,
            }));

            const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
            const totalPrice = cartItems.reduce((total, item) => total + (item.totalPrice || 0), 0);

            return NextResponse.json({ cartItems, totalQuantity, totalPrice }, { status: 200 });
        }
    } catch (error) {
        // console.log(error);
        // console.log(params.userID);
        console.log(params);
        return NextResponse.json({ Message: error }, { status: 505 });
    }
}
