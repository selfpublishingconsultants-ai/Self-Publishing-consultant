import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Self-Publishing Pricing - Affordable Service Packages",
    },
    description: "Transparent, affordable self-publishing packages for every budget. Choose from essential services like formatting to complete full-service launches with marketing and distribution included.",
    alternates: {
        canonical: "/pricing",
    },
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
