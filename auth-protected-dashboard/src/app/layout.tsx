import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auth Protected Dashboard",
  description: "Auth Protected Dashboard in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
