import { Minus, Plus, X } from 'lucide-react'
import type { CartItem } from '@/domain/entities/CartItem'
import { formatCurrency } from '@/shared/utils/formatCurrency'

interface CartItemRowProps {
  item: CartItem
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemove: (productId: string) => void
}

export function CartItemRow({ item, onUpdateQuantity, onRemove }: CartItemRowProps) {
  return (
    <div className="flex items-start gap-4 border-b border-coffee-200 py-4">
      <div className="flex-1">
        <p className="font-display text-base font-medium text-coffee-800">{item.product.name}</p>
        <p className="text-xs text-ink-secondary">{item.product.origin}</p>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-coffee-200 px-2 py-1">
            <button
              type="button"
              aria-label="Disminuir cantidad"
              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
              className="text-coffee-700 hover:text-gold-500"
            >
              <Minus size={14} />
            </button>
            <span className="w-4 text-center text-sm">{item.quantity}</span>
            <button
              type="button"
              aria-label="Aumentar cantidad"
              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
              className="text-coffee-700 hover:text-gold-500"
            >
              <Plus size={14} />
            </button>
          </div>
          <button
            type="button"
            aria-label="Quitar producto"
            onClick={() => onRemove(item.product.id)}
            className="text-ink-secondary hover:text-red-500"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <span className="font-display text-sm font-semibold text-coffee-800">
        {formatCurrency(item.product.price * item.quantity)}
      </span>
    </div>
  )
}
