import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/providers/SessionProvider";
import "./globals.css";
import { authConfig } from "@/config/authConfig";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurora",
  description: "Descrição...",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authConfig);
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
