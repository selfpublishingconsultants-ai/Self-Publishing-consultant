import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Schedule Consultation - Free 15-Minute Strategy Session",
    },
    description: "Book your free 15-minute strategy session with our lead publishing consultant. Get expert answers about your publishing questions and next steps forward.",
    alternates: {
        canonical: "/schedule",
    },
};

export default function ScheduleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
