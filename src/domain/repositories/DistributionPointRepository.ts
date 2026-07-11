import type { DistributionPoint } from '../entities/DistributionPoint'

export interface DistributionPointRepository {
  getAll(): DistributionPoint[]
}
