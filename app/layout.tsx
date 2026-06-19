import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Bengaluru Merch Lab",
  description: "Coded Storefront in TypeScript",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Core checkout drawer slide-out styling overlay */}
        <link rel="stylesheet" href="https://snipcart.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
