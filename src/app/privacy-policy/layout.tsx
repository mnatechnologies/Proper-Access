import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Proper Access",
  description:
    "How Proper Access collects, uses, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy | Proper Access",
    description:
      "How Proper Access collects, uses, and protects your personal information.",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
