import type { Metadata } from 'next';
import { fontMono, fontSans, robotoMono } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import AmplitudeContextProvider from '@/context/AmplitudeContextProvider';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  generator: 'Next.js',
  applicationName: siteConfig.title,
  referrer: 'origin-when-cross-origin',
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.links.linkedin }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      'index': true,
      'follow': true,
      'noimageindex': false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    type: 'website',
    siteName: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    locale: 'en_US',
    images: [
      {
        url: 'https://dmndev-resume.vercel.app/assets/img/profile.jpeg',
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  icons: {
    apple: '/apple-touch-icon.png',
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
  verification: {
    other: {
      me: [siteConfig.email, siteConfig.links.github, siteConfig.links.linkedin],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <AmplitudeContextProvider>
        <body
          className={`${fontMono.className} ${fontSans.variable} ${robotoMono.variable} scroll-smooth antialiased`}
        >
          {children}
        </body>
      </AmplitudeContextProvider>
    </html>
  );
}
