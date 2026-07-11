export type DistributionPointType = 'origen' | 'ciudad'

export interface DistributionPoint {
  id: string
  city: string
  department: string
  description: string
  type: DistributionPointType
}
