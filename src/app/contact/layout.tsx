import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Contact Us - Schedule Free Publishing Consultation",
    },
    description: "Ready to publish your book? Contact our team today for a free consultation covering editing, design, distribution strategies, and marketing for your title.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
