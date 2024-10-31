import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'animate.css';
import Head from "next/head";
import GeneralLayout from "@/layouts/GeneralLayout";
import BottomToUp from "../../utils/BottomToUp";




export const metadata: Metadata = {
  title: "xafran",
  description: "xafran Generated by create next app",
}



type RootLayoutProps = {
  children : React.ReactNode
}

 function RootLayout({children}: RootLayoutProps) {


  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <GeneralLayout>
          {children}
          <BottomToUp />
        </GeneralLayout>
      </body>
    </html>
  );
}



export default RootLayout