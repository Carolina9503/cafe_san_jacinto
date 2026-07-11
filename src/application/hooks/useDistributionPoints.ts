import { useMemo } from 'react'
import { StaticDistributionPointRepository } from '../../infrastructure/repositories/StaticDistributionPointRepository'

const distributionPointRepository = new StaticDistributionPointRepository()

export function useDistributionPoints() {
  return useMemo(() => distributionPointRepository.getAll(), [])
}
