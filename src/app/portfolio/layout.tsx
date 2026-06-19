import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Case Studies - Bestselling Books & Publishing Success",
    },
    description: "Explore our portfolio of published successes. From New York Times bestsellers to award-winning book designs. Real case studies demonstrating our expertise in author publishing.",
    alternates: {
        canonical: "/portfolio",
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
