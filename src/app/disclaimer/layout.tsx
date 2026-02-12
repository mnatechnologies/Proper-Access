import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Proper Access",
  description:
    "Important disclaimers about Proper Access services and NDIS support coordination guidance.",
  openGraph: {
    title: "Disclaimer | Proper Access",
    description:
      "Important disclaimers about Proper Access services and NDIS support coordination guidance.",
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
