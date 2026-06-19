import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Terms & Conditions - Publishing Service Agreement",
    },
    description: "Our terms and conditions outline professional standards for publishing services. Authors retain 100% rights with guaranteed professional-grade production quality.",
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
