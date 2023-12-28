"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Component/Footer";
import DrawerAppBar from "./Component/NavBar";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Portfolio | Personal ",
  description: "Welcome to my site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DrawerAppBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
