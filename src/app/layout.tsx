import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Filhas da Terra",
  description: "Site Produzido por Ítalo C.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kanit.className}>
      <body>{children}</body>
    </html>
  );
}
