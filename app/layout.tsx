import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nearfield | Wi-Fi NFC Setup",
  description: "Put your Wi-Fi on an NFC stand in a few taps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
