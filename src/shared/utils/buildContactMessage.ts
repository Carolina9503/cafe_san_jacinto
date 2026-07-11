import type { ContactMessage } from '@/domain/entities/ContactMessage'

export function buildContactMessage(data: ContactMessage): string {
  return [
    'Hola, te escribo desde la página web de Café San Jacinto:',
    '',
    `Nombre: ${data.name}`,
    `Correo: ${data.email}`,
    '',
    data.message,
  ].join('\n')
}
