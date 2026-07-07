import { ProductConfig } from '@/types'
import portfolioData from '@/data/portfolio.json'

export function getPortfolioItems(): ProductConfig[] {
  const items = portfolioData.items as ProductConfig[]
  if (process.env.NODE_ENV === 'development') {
    return items
  }
  return items.filter((item) => !(item as any).draft)
}

export function getPortfolioItem(slug: string): ProductConfig | undefined {
  return getPortfolioItems().find((item) => item.slug === slug)
}
