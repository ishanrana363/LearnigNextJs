
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Roboto } from "next/font/google"; // Correct import

const roboto = Roboto({ weight: ["500", "900", "700"], subsets: ["latin"] });


export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero",
  },
  description: "Super powerful Next.js website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
