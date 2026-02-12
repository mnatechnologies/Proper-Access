import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDIS Support Coordination | Proper Access",
  description:
    "Expert NDIS Support Coordination to help you navigate your plan, connect with providers, and achieve your goals.",
  openGraph: {
    title: "NDIS Support Coordination | Proper Access",
    description:
      "Expert NDIS Support Coordination to help you navigate your plan, connect with providers, and achieve your goals.",
  },
};

export default function SupportCoordinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
