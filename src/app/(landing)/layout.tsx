import type { Metadata } from "next";

import { appConfig } from "@/app-config";
import "@/app/globals.css";

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
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
