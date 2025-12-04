import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer/Footer";
import { fetchFooterData } from "./lib/helpers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Brand",
  description: "Discover The Brand – luxurious residential buildings offering modern living spaces with stunning amenities. Explore available apartments and find your next home today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const footerData = fetchFooterData()
  
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Navigation />
        <div className="max-w-screen-2xl mx-auto">
          {children}
        </div>
        <Footer footerData={footerData} />
      </body>
    </html>
  );
}
