import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/funnel-sans/400.css";
import "@fontsource/funnel-sans/700.css";




export const metadata: Metadata = {
  title: "ItsAll4U-Marketing & Comunicação",
  description: "ItsAll4U - Plataforma de Carreiras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
