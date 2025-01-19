import type { Metadata } from 'next';
import { fontMono, fontSans, robotoMono } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import './globals.css';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${fontMono.className} ${fontSans.variable} ${robotoMono.variable} scroll-smooth antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
