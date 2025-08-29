"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ConditionalLayout({ children }) {
    const pathname = usePathname();
    const noHeaderFooter = ["/login", "/register"];

    const hideHeaderFooter = noHeaderFooter.includes(pathname);

    return (
        <>
            {!hideHeaderFooter && <Header />}
            {children}
            {!hideHeaderFooter && <Footer />}
        </>
    );
}
