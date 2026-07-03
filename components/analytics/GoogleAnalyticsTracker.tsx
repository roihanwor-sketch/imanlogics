'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

export function GoogleAnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    
    // Construct the full URL path (pathname + query string)
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // Track the page view with GA4
    trackPageView(url, document.title);
  }, [pathname, searchParams]);

  return null;
}
