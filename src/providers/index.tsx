"use client";
import React from "react";
import { Session } from "next-auth";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

type ProvidersProps = PropsWithChildren<{
  session: Session | null;
}>;

export function Providers(props: ProvidersProps) {
  return (
    <NextAuthSessionProvider session={props.session}>
      <ThemeProvider attribute="class">{props.children}</ThemeProvider>
    </NextAuthSessionProvider>
  );
}
