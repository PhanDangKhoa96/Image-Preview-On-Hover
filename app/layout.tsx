import type {Metadata} from "next";
import "./globals.css";
import {LenisProvider} from "@/providers/LenisProvider";
import {GsapProvider} from "@/providers/GsapProvider";
import {cn} from "@/lib/utilities/cn";
import {spaceGrotesk} from "@/lib/fonts";
import {Header} from "@/components/Header";

export const metadata: Metadata = {
    title: "Khoa Phan — Image Preview on Hover",
    description:
        "A curated collection of street photography projects by Khoa Phan.",
    keywords: [
        "Khoa Phan",
        "street photography",
        "featured projects",
        "photography",
        "animation",
        "image preview on hover"
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "antialiased",
                    spaceGrotesk.variable,
                    "font-space-grotesk"
                )}>
                <Header />
                <LenisProvider>{children}</LenisProvider>
                <GsapProvider scrollTrigger />
            </body>
        </html>
    );
}
