import type { CartItem } from '@/domain/entities/CartItem'
import { formatCurrency } from './formatCurrency'

export function buildOrderMessage(items: CartItem[], totalPrice: number): string {
  const lines = items.map(
    (item) =>
      `• ${item.product.name} x${item.quantity} — ${formatCurrency(item.product.price * item.quantity)}`,
  )

  return [
    'Hola, quiero hacer un pedido de Café San Jacinto:',
    '',
    ...lines,
    '',
    `Total: ${formatCurrency(totalPrice)}`,
  ].join('\n')
}
