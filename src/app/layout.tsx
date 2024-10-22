import type { Metadata } from "next";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import NextTopLoader from "nextjs-toploader";

import { appConfig } from "@/app-config";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers/providers";

import { Header } from "./_header/header";

const { mode } = appConfig;

export const metadata: Metadata = {
  title: "The Happy Path",
  description: "Welcome to the easiest way to get up and running with Next.js!",
  openGraph:
    mode === "comingSoon"
      ? {
          title: "The Happy Path",
          description: "The Next.js Starter Kit sure to keep you smiling.",
          url: "https://happypath.pro",
          siteName: "The Happy Path",
          type: "website",
        }
      : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Providers>
          <NextTopLoader />
          <div className="flex w-full flex-col">
            <Header />
            <div>{children}</div>
          </div>
        </Providers>
        <Toaster richColors />
      </body>
    </html>
  );
}
