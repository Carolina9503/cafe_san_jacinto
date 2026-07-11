import type { DistributionPoint } from '../../domain/entities/DistributionPoint'
import type { DistributionPointRepository } from '../../domain/repositories/DistributionPointRepository'
import { distributionPointsData } from '../data/distributionPoints.data'

export class StaticDistributionPointRepository implements DistributionPointRepository {
  getAll(): DistributionPoint[] {
    return distributionPointsData
  }
}
