import "./globals.css";
import 'animate.css/animate.css';

import MainHeader from "../components/common/header";
import Footer from "@/components/common/footer";
import { Inter, Roboto, Poppins, Lobster_Two } from 'next/font/google';
import PostFooter from "@/components/common/post footer";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/design/theme toggle";
import MaintenancePage from "@/components/design/maintenance";
import { Toaster } from "react-hot-toast";
import { applyPassiveEventListeners } from "../lib/eventListeners.js"
import { useEffect } from 'react';

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

const MAINTENANCE_MODE = false;

export default function RootLayout({ children }) {
  useEffect(() => {
    applyPassiveEventListeners();
  }, []);
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {MAINTENANCE_MODE ? (
            <MaintenancePage />
          ) : (
            <div className="d-flex">
              <div id="content" className="flex-grow-1 w-full flex flex-col items-center">
                <div className="container fixed z-49">
                  <MainHeader activeTab="Home" />
                </div>
                {children}
                <Footer />
                <PostFooter />
              </div>
              <div className="fixed z-200 left-3 bottom-4 bg-white dark:bg-gray-900 border-1 border-gray-600 light:bg-gray-900 shadow-xl rounded-full">
                <ThemeToggle />
              </div>
            </div>
          )}
          <Toaster position="top-right" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}