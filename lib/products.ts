import { ProductConfig } from '@/types'
import productsData from '@/data/products.json'

export function getProductItems(): ProductConfig[] {
  const items = productsData.items as ProductConfig[]
  if (process.env.NODE_ENV === 'development') {
    return items
  }
  return items.filter((item) => !(item as any).draft)
}

export function getProductItem(slug: string): ProductConfig | undefined {
  return getProductItems().find((item) => item.slug === slug)
}
