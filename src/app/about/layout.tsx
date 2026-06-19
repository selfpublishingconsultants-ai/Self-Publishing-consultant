import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "About Us - Publishing Experts & Creative Team",
    },
    description: "Meet the publishing professionals at Self Publishing Consultant. Our team combines editorial expertise, design excellence, and marketing strategy to launch your book successfully.",
    alternates: {
        canonical: "/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
