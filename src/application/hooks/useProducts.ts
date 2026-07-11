import { useMemo } from 'react'
import { StaticProductRepository } from '../../infrastructure/repositories/StaticProductRepository'

const productRepository = new StaticProductRepository()

export function useProducts() {
  return useMemo(() => productRepository.getAll(), [])
}
