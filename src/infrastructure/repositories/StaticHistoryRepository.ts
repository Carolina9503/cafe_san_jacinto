import type { HistoryMilestone } from '../../domain/entities/HistoryMilestone'
import type { HistoryRepository } from '../../domain/repositories/HistoryRepository'
import { historyData } from '../data/history.data'

export class StaticHistoryRepository implements HistoryRepository {
  getAll(): HistoryMilestone[] {
    return historyData
  }
}
