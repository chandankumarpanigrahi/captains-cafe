"use client"; // Add this at top
import "./globals.css";
import 'animate.css/animate.css';
import MainHeader from "../components/common/header";
import Footer from "@/components/common/footer";
import { Inter, Quicksand } from 'next/font/google';
import PostFooter from "@/components/common/post footer";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/design/theme toggle";
import MaintenancePage from "@/components/design/maintenance";
import { Toaster } from "react-hot-toast";
import { usePathname } from 'next/navigation';
import Snowfall from "@/components/design/effects/Snowfall";
import FallingHearts from "@/components/design/effects/FallingHearts";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const MAINTENANCE_MODE = false;

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminPath = pathname?.startsWith('/admin');

  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {MAINTENANCE_MODE ? (
            <MaintenancePage />
          ) : isAdminPath ? (
            // Admin Layout - Clean
            <div className="admin-layout">
              {children}
              <Toaster position="top-right" reverseOrder={false}
                toastOptions={{ duration: 3000 }} />
            </div>
          ) : (
            // Normal Layout
            <div className="d-flex">
              {/* <Snowfall /> */}
              <FallingHearts />
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
              <Toaster position="top-right" reverseOrder={false}
                toastOptions={{ duration: 3000 }} />
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}