import { ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/application/context/CartContext'
import { Button } from '@/presentation/atoms/Button'
import { Text } from '@/presentation/atoms/Text'
import { CartItemRow } from '@/presentation/molecules/CartItemRow'
import { formatCurrency } from '@/shared/utils/formatCurrency'
import { buildOrderMessage } from '@/shared/utils/buildOrderMessage'
import { buildWhatsAppLink } from '@/shared/constants/contact'
import { cn } from '@/shared/utils/cn'

export function CartDrawer() {
  const { items, isOpen, totalPrice, closeCart, updateQuantity, removeItem, clearCart } = useCart()

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-coffee-900/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-beige shadow-lifted transition-transform duration-300 ease-organic',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-label="Carrito de compras"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-coffee-200 px-6 py-5">
          <h2 className="font-display text-xl font-medium text-coffee-900">Tu carrito</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="text-coffee-700 hover:text-gold-500"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <ShoppingBag size={36} strokeWidth={1.25} className="text-coffee-300" />
              <Text variant="secondary" className="text-sm">
                Tu carrito está vacío. Explora nuestro café molido 100% natural.
              </Text>
            </div>
          ) : (
            items.map((item) => (
              <CartItemRow
                key={item.product.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-coffee-200 px-6 py-6">
            <div className="mb-4 flex items-center justify-between">
              <Text variant="body" className="font-medium">
                Total
              </Text>
              <span className="font-display text-xl font-semibold text-coffee-800">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <Button
              href={buildWhatsAppLink(buildOrderMessage(items, totalPrice))}
              target="_blank"
              rel="noreferrer"
              className="w-full"
              size="lg"
              onClick={() => {
                clearCart()
                closeCart()
              }}
            >
              Finalizar compra por WhatsApp
            </Button>
          </div>
        )}
      </aside>
    </>
  )
}
