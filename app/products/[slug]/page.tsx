import { getProductItem, getProductItems } from '@/lib/products'
import { ProductTemplate } from '@/components/shared/ProductTemplate'
import { ZaadulKhotibTemplate } from '@/components/shared/ZaadulKhotibTemplate'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductItem(slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/products/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const products = getProductItems()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductItem(slug)

  if (!product) {
    notFound()
  }

  if (slug === 'zaadul-khotib') {
    return <ZaadulKhotibTemplate backUrl="/products" backLabel="Kembali ke Etalase Produk" />
  }

  return (
    <ProductTemplate product={product} backUrl="/products" backLabel="Kembali ke Etalase Produk" />
  )
}
