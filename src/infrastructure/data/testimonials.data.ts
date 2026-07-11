import type { Testimonial } from '../../domain/entities/Testimonial'

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    authorName: 'Marcela Ortiz',
    authorRole: 'Barista, Bogotá',
    quote:
      'Se nota el trabajo artesanal en cada taza. Es el café que recomiendo a todos mis clientes en la cafetería.',
    rating: 5,
  },
  {
    id: 't2',
    authorName: 'Andrés Salazar',
    authorRole: 'Cliente desde 2019',
    quote:
      'El sabor a panela y caramelo me recuerda al café de mi abuela en la finca. Pura tradición colombiana.',
    rating: 5,
  },
  {
    id: 't3',
    authorName: 'Laura Restrepo',
    authorRole: 'Chef y cliente frecuente',
    quote:
      'Calidad premium a un precio justo. El empaque de yute y el tueste artesanal se sienten cuidados al detalle.',
    rating: 5,
  },
  {
    id: 't4',
    authorName: 'Camilo Vélez',
    authorRole: 'Distribuidor, Medellín',
    quote:
      'Llevamos años trabajando con San Jacinto porque cumplen: café orgánico, trazable y con un sabor consistente.',
    rating: 4,
  },
]
