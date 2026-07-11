export type ProductBadge = 'organico' | 'edicion-limitada' | 'mas-vendido' | 'especialidad'

export interface Product {
  id: string
  name: string
  origin: string
  altitude: string
  process: string
  roast: 'claro' | 'medio' | 'oscuro'
  notes: string[]
  description: string
  price: number
  weightGrams: number
  badge?: ProductBadge
  image: string
}
