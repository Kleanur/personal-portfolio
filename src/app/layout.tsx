import type { Metadata } from "next";
import "@/app/_ui/global.css";
import { inter } from "@/app/_ui/fonts"

export const metadata: Metadata = {
  title: "Kevin Li - Software Developer",
  description: "Kevin's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
