import type { Metadata } from "next";
import { Josefin_Sans } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";


const josfin = Josefin_Sans({
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
        className={`${josfin.className} bg-[#FCFBF9] overflow-x-hidden`}

      >
        {children}
      </body>
    </html>
  );
}
