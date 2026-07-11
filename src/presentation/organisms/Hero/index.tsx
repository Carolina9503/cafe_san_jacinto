import { ArrowRight, BookOpen } from 'lucide-react'
import { Button } from '@/presentation/atoms/Button'
import { Container } from '@/presentation/atoms/Container'
import { cultivoImg, tazaCafeImg } from '@/shared/assets/images'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-24"
    >
      <img
        src={cultivoImg}
        alt="Cultivo de café San Jacinto en Carcasí, Colombia"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/95 via-coffee-950/75 to-coffee-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/70 via-transparent to-coffee-950/15" />

      {/* Real branded mug, framed */}
      <div className="pointer-events-none absolute bottom-10 right-10 hidden -rotate-2 overflow-hidden rounded-2xl border-4 border-coffee-50/15 shadow-lifted md:block lg:h-64 lg:w-56">
        <img
          src={tazaCafeImg}
          alt="Taza de Café San Jacinto recién servida"
          className="h-full w-full object-cover"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          <span className="mb-5 block text-xs font-semibold uppercase tracking-widest2 text-gold-300">
            Café artesanal · 100% colombiano · Carcasí
          </span>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-coffee-50 md:text-7xl">
            Café San Jacinto
          </h1>
          <p className="mt-6 font-display text-xl italic text-gold-200 md:text-2xl">
            &ldquo;El que rinde y rinde para su tinto.&rdquo;
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-coffee-100/90">
            Cultivado en las montañas cafeteras de Carcasí, Colombia, tostado a mano en pequeños
            lotes para honrar cada grano y cada finca.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#productos" size="lg" icon={<ArrowRight size={18} />}>
              Comprar ahora
            </Button>
            <Button
              href="#historia"
              variant="secondary-light"
              size="lg"
              icon={<BookOpen size={18} />}
              iconPosition="left"
            >
              Conoce nuestra historia
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
