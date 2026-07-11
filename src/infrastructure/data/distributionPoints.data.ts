import type { DistributionPoint } from '../../domain/entities/DistributionPoint'

export const distributionPointsData: DistributionPoint[] = [
  {
    id: 'finca-dona-rosa',
    city: 'Finca de Doña Rosa',
    department: 'Vereda cafetera, Carcasí, Santander',
    description: 'El origen: visita la finca y compra el café directo donde se cultiva y se tuesta.',
    type: 'origen',
  },
  {
    id: 'carcasi',
    city: 'Carcasí',
    department: 'Santander',
    description: 'Punto de venta autorizado en el pueblo de Carcasí.',
    type: 'origen',
  },
  {
    id: 'bucaramanga',
    city: 'Bucaramanga',
    department: 'Santander',
    description: 'Distribución autorizada, coordinada por WhatsApp.',
    type: 'ciudad',
  },
  {
    id: 'bogota',
    city: 'Bogotá',
    department: 'Cundinamarca',
    description: 'Distribución autorizada, coordinada por WhatsApp.',
    type: 'ciudad',
  },
  {
    id: 'medellin',
    city: 'Medellín',
    department: 'Antioquia',
    description: 'Distribución autorizada, coordinada por WhatsApp.',
    type: 'ciudad',
  },
  {
    id: 'barranquilla',
    city: 'Barranquilla',
    department: 'Atlántico',
    description: 'Distribución autorizada, coordinada por WhatsApp.',
    type: 'ciudad',
  },
]
