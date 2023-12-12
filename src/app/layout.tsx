"use client";

import type { Metadata } from "next";
import { Saira, Tourney } from "next/font/google";
import "./globals.css";
import Footer from "./layout/footer/footer";
import Navbar from "./layout/navigation/navbar";
import { TailwindIndicator } from "./utils/breakpoint-indicator";
import { NextUIProvider } from "@nextui-org/react";

const saira = Saira({
    subsets: ["latin"],
    variable: "--font-saira",
});
const tourney = Tourney({ subsets: ["latin"], variable: "--font-tourney" });

// export const metadata: Metadata = {
//     title: "Rizky Syahputra",
//     description: "Personal Portofolio Rizky Syahputra",
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>Rizky Syahputra</title>
                <meta charSet="utf-8" />
                <meta name="google" content="notranslate" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
            </head>
            <body
                className={`${saira.variable} ${tourney.variable} overflow-x-hidden`}
            >
                <NextUIProvider>
                    <Navbar />
                    <TailwindIndicator />
                    {children}
                    <Footer />
                </NextUIProvider>
            </body>
        </html>
    );
}
