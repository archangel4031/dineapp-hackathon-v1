import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
    // "/" will be accessible to all users
    publicRoutes: ["/", "/products", "/cart", "/category/:path*"],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/api/cart/:path*"],
};