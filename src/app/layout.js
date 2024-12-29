import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EasterEggButton from "@/components/EasterEggButton";

export const metadata = {
  title: "St. Johns Gym - Manzanillo",
  description: "Gimnasio St. Johns Manzanillo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <EasterEggButton />
        {children}
      </body>
    </html>
  );
} 