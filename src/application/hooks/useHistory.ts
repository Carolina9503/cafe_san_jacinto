import { useMemo } from 'react'
import { StaticHistoryRepository } from '../../infrastructure/repositories/StaticHistoryRepository'

const historyRepository = new StaticHistoryRepository()

export function useHistory() {
  return useMemo(() => historyRepository.getAll(), [])
}
