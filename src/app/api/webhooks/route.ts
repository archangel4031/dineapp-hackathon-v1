import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import Stripe from "stripe";

const EndPointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(request: any, response: any) {
    const headersList = headers();
    await db.delete(cartTable);

    try {
        const rawBody = await request.text();
        const sig = headersList.get("stripe-signature");
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
            apiVersion: "2023-08-16",
        });

        let event;
        try {
            if (!sig || !EndPointSecret) {
                return new Response("Stripe Webhook Secret is not set"), { status: 400 };
            }

            event = stripe.webhooks.constructEvent(rawBody.toString(), sig, EndPointSecret);
        } catch (error: any) {
            console.log("Signature/Endpoint Secret Error = ", error);
            return new Response("Webhook Error: " + error.message), { status: 400 };
        }
        if (`checkout.session.completed` === event.type) {
            const session = event.data.object;
            //@ts-ignore
            const customerData = await stripe.customers.retrieve(session.customer);
            //@ts-ignore
            const userId = customerData.metadata.userId;
            console.log("**********USER ID IS********** = ", userId);
            await db.delete(cartTable).where(eq(cartTable.user_id, userId));
            // console.log("Payment Success", session);
            //@ts-ignore
            const line_items = await stripe.checkout.sessions.listLineItems(event.data.object!.id);
            return new Response("Payment Confirmation Router Reciept", { status: 200 });
        } else {
            response.setHeader("Allow", "POST");
        }
    } catch (error) {
        console.log("Error in WebHook = ", error);
        return;
    }
}
