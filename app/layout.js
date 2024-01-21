import { Sarabun } from "next/font/google";
import "../app/ui/globals.css";

const sarabun = Sarabun({
  subsets: ["latin"],
  variable: "--font-sarabun",
  display: "swap",
  fallback: ["system-ui", "arial"],
  weight: ["100", "500", "800"],
});

export const metadata = {
  title: "Lama Dev Next.js Admin Dashboard",
  description: "Next.js Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sarabun.className}>{children}</body>
    </html>
  );
}
