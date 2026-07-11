import type { Benefit } from '../../domain/entities/Benefit'
import type { BenefitRepository } from '../../domain/repositories/BenefitRepository'
import { benefitsData } from '../data/benefits.data'

export class StaticBenefitRepository implements BenefitRepository {
  getAll(): Benefit[] {
    return benefitsData
  }
}
