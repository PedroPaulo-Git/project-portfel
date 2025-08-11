import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfel - Consultoria Financeira | Planejamento Personalizado",
  description: "Muito mais do que uma Consultoria Financeira. Realize seus sonhos com planejamento personalizado. Mais de 12.000 clientes e 8 bilhões sob custódia.",
  keywords: "consultoria financeira, planejamento financeiro, investimentos, carteira de investimentos, portfel",
  authors: [{ name: "Portfel" }],
  openGraph: {
    title: "Portfel - Consultoria Financeira",
    description: "Muito mais do que uma Consultoria Financeira. Realize seus sonhos com planejamento personalizado.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfel - Consultoria Financeira",
    description: "Muito mais do que uma Consultoria Financeira. Realize seus sonhos com planejamento personalizado.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
