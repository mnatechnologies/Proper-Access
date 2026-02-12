import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access & Review Consulting | Proper Access",
  description:
    "Structured guidance for navigating NDIS access, internal reviews, and plan reassessments.",
  openGraph: {
    title: "Access & Review Consulting | Proper Access",
    description:
      "Structured guidance for navigating NDIS access, internal reviews, and plan reassessments.",
  },
};

export default function AccessConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
