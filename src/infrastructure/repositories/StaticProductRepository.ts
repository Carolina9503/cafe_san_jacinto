import type { Product } from '../../domain/entities/Product'
import type { ProductRepository } from '../../domain/repositories/ProductRepository'
import { productsData } from '../data/products.data'

export class StaticProductRepository implements ProductRepository {
  getAll(): Product[] {
    return productsData
  }

  getById(id: string): Product | undefined {
    return productsData.find((product) => product.id === id)
  }
}
