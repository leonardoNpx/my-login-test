import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/providers/SessionProvider";
import { authConfig } from "@/config/authConfig";
import { getServerSession } from "next-auth";
import "./globals.css";

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
    <html lang="pt-Br">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
