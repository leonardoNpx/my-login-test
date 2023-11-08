import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { authConfig } from "@/config/authConfig";
import { getServerSession } from "next-auth";
import { Providers } from "@/providers";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurora",
  description: "Descrição...",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authConfig);
  return (
    <html lang="pt-Br" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers session={session}>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
