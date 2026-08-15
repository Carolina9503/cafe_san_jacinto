import { Leaf, Flame, Package, Sprout } from 'lucide-react'
import type { Benefit } from '../../domain/entities/Benefit'

export const benefitsData: Benefit[] = [
  {
    id: 'b1',
    icon: Leaf,
    title: '100% natural',
    description: 'Cultivado sin saborizantes ni atajos, respetando los ciclos naturales de la tierra.',
  },
  {
    id: 'b2',
    icon: Flame,
    title: 'Tueste artesanal',
    description: 'Rosa tuesta cada lote en perol y lo muele a mano, igual que desde el primer día.',
  },
  {
    id: 'b3',
    icon: Sprout,
    title: 'Cultivo familiar',
    description: 'Sembrado y cosechado mata por mata por Rosa y don Ceferino, desde el semillero.',
  },
  {
    id: 'b4',
    icon: Package,
    title: 'Empaque cuidado',
    description: 'Empacado a mano, lote por lote, porque el cuidado no termina en la taza.',
  },
]
