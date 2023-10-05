// src/pages/_app.tsx
import "../styles/globals.css";
import React from "react";
import type { AppType } from "next/app";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { PwaMeta } from "components";
import { ThemeProvider } from "next-themes";
import { api } from "utils";
import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-primary",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <PwaMeta />
      </Head>
      <NextUIProvider>
        <ThemeProvider
          defaultTheme="dark"
          attribute="class"
          enableSystem={false}
        >
          <main className={`${poppins.variable} font-primary`}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </NextUIProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
