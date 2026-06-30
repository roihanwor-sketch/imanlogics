import { ProductConfig } from '@/types';
import portfolioData from '@/data/portfolio.json';

export function getPortfolioItems(): ProductConfig[] {
  return portfolioData.items as ProductConfig[];
}

export function getPortfolioItem(slug: string): ProductConfig | undefined {
  return getPortfolioItems().find(item => item.slug === slug);
}
