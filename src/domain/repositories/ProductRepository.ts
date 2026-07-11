import type { Product } from '../entities/Product'

export interface ProductRepository {
  getAll(): Product[]
  getById(id: string): Product | undefined
}
