import { useMemo } from 'react'
import { StaticBenefitRepository } from '../../infrastructure/repositories/StaticBenefitRepository'

const benefitRepository = new StaticBenefitRepository()

export function useBenefits() {
  return useMemo(() => benefitRepository.getAll(), [])
}
