import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <div className="border-t-2 border-black flex items-center justify-between px-14 py-4">
            <div>Copyright &copy; 2022 Dine Market</div>
            <div>
                Design by
                <span className="font-bold">Weird Design Studio</span>
            </div>
            <div>
                Code by{" "}
                <Link
                    href={"https://github.com/archangel4031"}
                    className="text-blue-500"
                >
                    Malik Sahab
                </Link>
            </div>
        </div>
    );
}
