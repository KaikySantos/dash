import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { ThemeProvider } from "@/components/providers/theme-provider"
import "./globals.css";

import { Navigation } from "@/components/navigation";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Test",
};

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
          <div className="h-full flex">
            <Navigation />

            <main className="flex-1 h-full min-h-screen md:pl-[300px] overflow-y-auto">
              <Navbar />

              <div className="">
                {children}
              </div>
            </main>
          </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}