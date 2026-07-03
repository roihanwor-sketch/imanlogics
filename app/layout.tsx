import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imanlogics.web.id'),
  title: {
    template: '%s | Iman Logics',
    default: 'Iman Logics',
  },
  description: 'Bangun produktivitas efektif dengan Iman Logics. Ekosistem digital berbasis AI yang menyediakan solusi sistem kognitif, manajemen logika, dan tools cerdas.',
  icons: {
    icon: '/icon.png',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'YOUR_GSC_VERIFICATION_CODE_HERE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://identity.netlify.com https://unpkg.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https://images.unsplash.com blob: https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net; connect-src 'self' https://identity.netlify.com https://www.google-analytics.com https://stats.g.doubleclick.net;" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <AnalyticsProvider />
        {children}
        {process.env.NODE_ENV === 'production' && gaId && (
          <GoogleAnalytics gaId={gaId} />
        )}
      </body>
    </html>
  );
}
