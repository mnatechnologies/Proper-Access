import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Agreement | Proper Access",
  description:
    "Read the Proper Access NDIS Support Coordination service agreement terms and conditions.",
  openGraph: {
    title: "Service Agreement | Proper Access",
    description:
      "Read the Proper Access NDIS Support Coordination service agreement terms and conditions.",
  },
};

export default function ServiceAgreementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
