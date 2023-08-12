export function decodeURLString(urlString: string): string {
    return decodeURIComponent(urlString);
}

export function MakeURLFromTitle(str: string): string {
    let inTitle: string = decodeURLString(str);
    return inTitle.replace(/\s+/g, "-").toLowerCase();
}

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
}
