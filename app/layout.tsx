import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urania Adventures | Astroturismo Científico e Inclusivo",
  description: "Experiencias de astroturismo con rigor científico, dirigidas por astrofísicos. Observación astronómica, naturaleza y ciencia para todos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
