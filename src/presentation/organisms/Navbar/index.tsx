import { useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/application/context/CartContext'
import { Container } from '@/presentation/atoms/Container'
import { Button } from '@/presentation/atoms/Button'
import { Logo } from '@/presentation/atoms/Logo'
import { NavLink } from '@/presentation/molecules/NavLink'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nuestra historia', href: '#historia' },
  { label: 'Nuestro café', href: '#cafe' },
  { label: 'Productos', href: '#productos' },
  { label: 'Puntos de venta', href: '#distribucion' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { totalItems, openCart } = useCart()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-coffee-200/60 bg-paper shadow-soft">
      <Container className="flex h-20 items-center justify-between">
        <a href="#inicio" aria-label="Café San Jacinto — inicio">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openCart}
            aria-label="Abrir carrito de compras"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full text-coffee-700 transition-colors hover:bg-coffee-700/8"
          >
            <ShoppingBag size={20} strokeWidth={1.75} />
            {totalItems > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-400 text-[10px] font-semibold text-coffee-900">
                {totalItems}
              </span>
            )}
          </button>

          <Button href="#productos" size="sm" className="hidden md:inline-flex">
            Comprar ahora
          </Button>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-coffee-700 hover:bg-coffee-700/8 xl:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <nav className="border-t border-coffee-200/60 bg-paper px-5 py-6 xl:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Button href="#productos" size="sm" className="mt-2 w-full">
              Comprar ahora
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
