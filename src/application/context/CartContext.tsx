import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { CartItem } from '../../domain/entities/CartItem'
import type { Product } from '../../domain/entities/Product'

interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  totalItems: number
  totalPrice: number
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product: Product) => {
    setItems((current) => {
      const existing = current.find((item) => item.product.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { product, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((current) => current.filter((item) => item.product.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((current) =>
      quantity <= 0
        ? current.filter((item) => item.product.id !== productId)
        : current.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item,
          ),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.product.price, 0),
    [items],
  )

  const value: CartContextValue = {
    items,
    isOpen,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider')
  }
  return context
}
