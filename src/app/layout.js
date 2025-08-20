import "./globals.css";
import 'animate.css/animate.css';

import MainHeader from "../components/common/header";
import Footer from "@/components/common/footer";

import { Inter, Roboto, Poppins, Lobster_Two } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '900'],
  display: 'swap',
});

const lobsterTwo = Lobster_Two({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'The Captains Cafe',
  description: 'A Complete Cafe Chain Management by The Scottish Cafe & Catering',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="d-flex">
          <div id="content" className="flex-grow-1 w-full flex flex-col items-center">
            {/* <div className="container fixed z-50">
              <MainHeader activeTab="Home" />
            </div> */}
            {children}
            {/* <Footer/> */}
          </div>
        </div>
      </body>
    </html>
  );
}
