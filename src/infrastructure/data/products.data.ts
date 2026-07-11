import type { Product } from '../../domain/entities/Product'
import { empaqueImg, tazaCafeImg } from '@/shared/assets/images'

export const productsData: Product[] = [
  {
    id: 'molido-125g',
    name: 'Café San Jacinto Molido 125g',
    origin: 'Carcasí, Colombia',
    altitude: '1.750 msnm',
    process: 'Natural',
    roast: 'medio',
    notes: ['100% natural', 'Sin saborizantes', 'Molido tradicional'],
    description:
      'Presentación personal, ideal para conocer nuestro café: 100% natural, sin saborizantes, molido para el tinto de siempre.',
    price: 17500,
    weightGrams: 125,
    image: tazaCafeImg,
  },
  {
    id: 'molido-500g',
    name: 'Café San Jacinto Molido 500g',
    origin: 'Carcasí, Colombia',
    altitude: '1.750 msnm',
    process: 'Natural',
    roast: 'medio',
    notes: ['100% natural', 'Sin saborizantes', 'Molido tradicional'],
    description:
      'Presentación familiar, la que más rinde: 100% natural, sin saborizantes, molido para el tinto de siempre.',
    price: 28500,
    weightGrams: 500,
    badge: 'mas-vendido',
    image: empaqueImg,
  },
]
