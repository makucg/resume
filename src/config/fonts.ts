import { Fira_Code as FontMono, Inter as FontSans, Roboto_Mono } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const robotoMono = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});
