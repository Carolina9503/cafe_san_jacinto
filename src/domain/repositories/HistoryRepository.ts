import type { HistoryMilestone } from '../entities/HistoryMilestone'

export interface HistoryRepository {
  getAll(): HistoryMilestone[]
}
