import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./_components/header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth 🔐",
  description: "A Simple Authentication App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
