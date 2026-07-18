import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nerdoly",
  description: "An app designed to enhance and optimize your studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
