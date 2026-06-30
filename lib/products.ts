import { ProductConfig } from '@/types';
import productsData from '@/data/products.json';

export function getProductItems(): ProductConfig[] {
  return productsData.items as ProductConfig[];
}

export function getProductItem(slug: string): ProductConfig | undefined {
  return getProductItems().find(item => item.slug === slug);
}
