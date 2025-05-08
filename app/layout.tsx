import type { Metadata } from "next";
import { Toaster } from "sonner";

import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Deep Research v2",
  description: "A research app designed for deep research.",
};

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <TooltipProvider>
        <body className="antialiased">
          <Toaster position="top-center" />
          {children}
        </body>
      </TooltipProvider>
    </html>
  );
}
