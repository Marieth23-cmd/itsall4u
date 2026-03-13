import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Providers from "./providers";



type Props = {
  children: ReactNode;
  params:Promise<{ locale: string }>;
};


export const metadata: Metadata = {
  title: "ItsAll4U-Marketing & Comunicação",
  description: "ItsAll4U - Plataforma de Carreiras",
  icons: {
  icon: [
    { url: "/itsall/logo.png", type: "image/png" }
  ],
},
};


export default async function LocaleLayout({children , params}:Props) {
  const {locale}= await params;
  console.log("Locale activo:", locale)

  const messages = await getMessages({locale});
  console.log("Mensagens carregadas:", Object.keys(messages))

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
