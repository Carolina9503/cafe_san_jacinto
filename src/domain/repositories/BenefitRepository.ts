import type { Benefit } from '../entities/Benefit'

export interface BenefitRepository {
  getAll(): Benefit[]
}
