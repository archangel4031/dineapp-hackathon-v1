export function decodeURLString(urlString: string): string {
    return decodeURIComponent(urlString);
}

export function MakeURLFromTitle(str: string): string {
    let inTitle:string = decodeURLString(str);
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

