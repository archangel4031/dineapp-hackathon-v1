export interface CardProps {
    id: number;
    title: string;
    price: string;
    discounted?: string;
    imageSrc: string;
    imageAlt: string;
    category: string;
    className?: string;
}
export interface productInterface {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    image: string;
    imageAlt: string;
    price: number;
    category: string;
    className?: string;
    totalPrice?: number;
    userID?: string;
    quantity: number;
}

export interface CartState {
    cartItems: Array<productInterface>;
    totalPrice: number;
    totalQuantity: number;
}
