import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../public/css/mobile-navbar.css";
import EasterEggButton from "@/components/EasterEggButton";
import MobileNavbar from "@/components/MobileNavbar";

import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "St. Johns Gym - Manzanillo",
  description: "Gimnasio St. Johns Manzanillo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <EasterEggButton />
      <MobileNavbar />
        {children}
      </body>
    </html>
  );
} 