import { useProducts } from '@/application/hooks/useProducts'
import { useCart } from '@/application/context/CartContext'
import { Container } from '@/presentation/atoms/Container'
import { SectionHeading } from '@/presentation/molecules/SectionHeading'
import { ProductCard } from '@/presentation/molecules/ProductCard'

export function ProductosSection() {
  const products = useProducts()
  const { addItem } = useCart()

  return (
    <section id="productos" className="bg-coffee-50 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Nuestro café"
          title="Café molido, 100% natural"
          description="Sin saborizantes ni atajos: tostado y molido como siempre se ha hecho en casa. Elige la presentación que más te rinda."
        />

        <div className="mx-auto mt-16 grid max-w-3xl gap-8 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>
      </Container>
    </section>
  )
}
