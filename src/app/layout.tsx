import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CTRL MSP",
  description: "Managed IT and AV services in Los Angeles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}