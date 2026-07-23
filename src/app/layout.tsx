import type { Metadata } from "next";
import "./globals.css";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-baloo",
});

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
      <body className={`${baloo.variable} min-h-screen`}>{children}</body>
    </html>
  );
}
