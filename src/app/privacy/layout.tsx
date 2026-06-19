import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Privacy Policy - Your Data Security Protection",
    },
    description: "Our privacy policy outlines how we protect your intellectual property and personal information throughout the publishing process and beyond.",
    alternates: {
        canonical: "/privacy",
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
