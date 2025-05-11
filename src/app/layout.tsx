import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import ReduxProvider from "../store/Provider";
import { ToastContainer, toast } from "react-toastify";
import Script from "next/script";

const josfin = Josefin_Sans({
  subsets: ["latin"],
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
      <head>
        <script
          src="https://checkout.razorpay.com/v1/checkout.js"
          async
        ></script>
      </head>
      <body className={`${josfin.className} bg-[#FCFBF9] overflow-x-hidden`}>
        <ToastContainer />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
