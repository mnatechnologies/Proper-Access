import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Provider Setup & Compliance Consulting | Proper Access",
  description:
    "Independent guidance for NDIS provider setup, compliance obligations, and registration pathways.",
  openGraph: {
    title: "Provider Setup & Compliance Consulting | Proper Access",
    description:
      "Independent guidance for NDIS provider setup, compliance obligations, and registration pathways.",
  },
};

export default function ProviderConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
