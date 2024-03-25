import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MultiLayerParallax from "./components/Parallax";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nassim Apprend",
  description: "Portfolio enseignant de Nassim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
