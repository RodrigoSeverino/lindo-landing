import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "+Lindo — Diseño y decoración a medida",
  description:
    "Diseño a medida, asesoramiento y colocación de vinilos decorativos e intervenciones integrales de espacios en Montevideo, Uruguay.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
