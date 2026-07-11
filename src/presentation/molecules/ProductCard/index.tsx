import { Leaf, ShoppingBag, Sparkles, Star } from 'lucide-react'
import type { Product, ProductBadge } from '@/domain/entities/Product'
import { Badge } from '@/presentation/atoms/Badge'
import { Button } from '@/presentation/atoms/Button'
import { Heading } from '@/presentation/atoms/Heading'
import { Text } from '@/presentation/atoms/Text'
import { formatCurrency } from '@/shared/utils/formatCurrency'

const badgeConfig: Record<ProductBadge, { label: string; tone: 'gold' | 'organic' | 'coffee' | 'outline'; icon: typeof Leaf }> = {
  organico: { label: 'Orgánico', tone: 'organic', icon: Leaf },
  'edicion-limitada': { label: 'Edición limitada', tone: 'coffee', icon: Sparkles },
  'mas-vendido': { label: 'Más vendido', tone: 'gold', icon: Star },
  especialidad: { label: 'Especialidad', tone: 'outline', icon: Sparkles },
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const badge = product.badge ? badgeConfig[product.badge] : undefined

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-coffee-200 bg-white shadow-card transition-all duration-300 ease-organic hover:-translate-y-1 hover:shadow-lifted">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-organic group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/35 via-transparent to-transparent" />
        {badge && (
          <Badge tone={badge.tone} className="absolute left-4 top-4 gap-1 shadow-soft">
            <badge.icon size={12} strokeWidth={2} />
            {badge.label}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <Heading level={4}>{product.name}</Heading>
          <Text variant="secondary" className="mt-1 text-sm">
            {product.origin} · {product.altitude}
          </Text>
        </div>

        <Text variant="secondary" className="text-sm">
          {product.description}
        </Text>

        <div className="flex flex-wrap gap-1.5">
          {product.notes.map((note) => (
            <span
              key={note}
              className="rounded-full border border-coffee-200 bg-coffee-50 px-2.5 py-1 text-xs text-ink-secondary"
            >
              {note}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div>
            <span className="font-display text-xl font-semibold text-coffee-800">
              {formatCurrency(product.price)}
            </span>
            <span className="ml-1 text-xs text-ink-secondary">/ {product.weightGrams}g</span>
          </div>
          <Button
            size="sm"
            icon={<ShoppingBag size={16} strokeWidth={1.75} />}
            onClick={() => onAddToCart(product)}
          >
            Añadir
          </Button>
        </div>
      </div>
    </article>
  )
}
