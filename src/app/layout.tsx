import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";


const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Home page",
  description: "This is joyful home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${inter.className} bg-[#FCFBF9] overflow-x-hidden`}

      >
        {children}
      </body>
    </html>
  );
}
