'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#kontak'); // 💡 Pengalihan rute statis yang aman
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <p className="text-muted-foreground animate-pulse">Mengalihkan ke bagian kontak...</p>
    </div>
  );
}
