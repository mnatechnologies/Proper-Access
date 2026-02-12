import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Proper Access",
  description:
    "Learn about Proper Access and our mission to provide independent NDIS support coordination services across Australia.",
  openGraph: {
    title: "About Us | Proper Access",
    description:
      "Learn about Proper Access and our mission to provide independent NDIS support coordination services across Australia.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
