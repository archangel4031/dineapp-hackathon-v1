"use client";

import { productInterface } from "@/lib/interfaces";
import { GetStripePromise } from "@/lib/stripe";

interface IProps {
    products: productInterface[];
}
export default function StripeCheckoutButton(props: IProps) {
    async function handleStripeCheckout() {
        const stripe = await GetStripePromise();
        const res = await fetch(`/api/stripe-session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            cache: "no-cache",
            body: JSON.stringify(props.products),
        });

        const data = await res.json();
        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
    }

    return (
        <div className="py-5">
            <button className="bg-[#212121] text-white py-3 px-3 rounded-md" onClick={handleStripeCheckout}>
                Proceed to Checkout
            </button>
        </div>
    );
}
