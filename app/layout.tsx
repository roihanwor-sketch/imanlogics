import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Iman Logics',
    default: 'Iman Logics',
  },
  description: 'Ekosistem Digital Berbasis AI untuk berbagai kebutuhan.',
  icons: {
    icon: '/imanlogics2/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
