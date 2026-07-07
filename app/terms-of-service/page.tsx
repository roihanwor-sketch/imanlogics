import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { FadeIn } from '@/components/shared/FadeIn'
import { marked } from 'marked'
import termsData from '@/data/terms-of-service.json'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: termsData.seo_title,
    description: termsData.seo_description,
    alternates: {
      canonical: '/terms-of-service/',
    },
  }
}

export default async function TermsOfServicePage() {
  if (process.env.NODE_ENV !== 'development' && (termsData as any).draft) {
    notFound()
  }

  const contentHtml = await marked.parse(termsData.body)

  return (
    <>
      {/* Background gradients */}
      <div className="fixed w-[600px] h-[600px] bg-cyan-900/10 top-[-200px] left-[-200px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>
      <div className="fixed w-[500px] h-[500px] bg-violet-900/10 top-[20%] right-[-100px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

      <SiteHeader />

      <main className="flex-grow pt-32 pb-24 px-6 relative z-10 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-12 border-b border-slate-200 dark:border-white/10 pb-8">
              <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                {termsData.title}
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Terakhir Diperbarui: {termsData.last_updated}
              </p>
            </div>

            <div
              className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </FadeIn>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
