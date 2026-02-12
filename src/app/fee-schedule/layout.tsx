import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fee Schedule | Proper Access",
  description:
    "View our transparent NDIS Support Coordination fee schedule and pricing information.",
  openGraph: {
    title: "Fee Schedule | Proper Access",
    description:
      "View our transparent NDIS Support Coordination fee schedule and pricing information.",
  },
};

export default function FeeScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
