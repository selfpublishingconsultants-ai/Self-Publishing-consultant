import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Our Team - Editors, Designers & Marketing Experts",
    },
    description: "Professional editors, cover designers, and marketing strategists dedicated to your publishing success. Meet the team behind bestselling book launches for independent authors.",
    alternates: {
        canonical: "/team",
    },
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
