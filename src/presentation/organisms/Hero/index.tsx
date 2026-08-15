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
      {/* Photograph, lightly graded so the cherries and morning light survive the scrim */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={cultivoImg}
          alt="Cultivo de café San Jacinto en Carcasí, Colombia"
          className="animate-hero-pan h-full w-full object-cover object-[center_58%] brightness-[1.06] contrast-[1.06] saturate-[1.18]"
        />
      </div>

      {/* Directional scrim: dark only where the copy sits, clearing the photo on the right */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(27,18,12,0.90)_0%,rgba(27,18,12,0.74)_45%,rgba(27,18,12,0.58)_100%)] md:bg-[linear-gradient(100deg,rgba(27,18,12,0.90)_0%,rgba(27,18,12,0.74)_26%,rgba(27,18,12,0.44)_50%,rgba(27,18,12,0.16)_74%,rgba(27,18,12,0)_100%)]" />

      {/* Vertical grounding: seats the navbar on top, anchors the base */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(27,18,12,0.50)_0%,rgba(27,18,12,0.10)_22%,rgba(27,18,12,0)_50%,rgba(27,18,12,0.28)_86%,rgba(27,18,12,0.42)_100%)]" />

      {/* Warm sun bloom, echoing the light already in the photograph */}
      <div className="absolute inset-0 mix-blend-screen bg-[radial-gradient(55%_45%_at_80%_10%,rgba(223,184,71,0.24)_0%,rgba(212,160,23,0.08)_45%,transparent_72%)]" />

      {/* Real branded mug, framed as a physical print so it reads against the foliage */}
      <div className="pointer-events-none absolute bottom-10 right-10 hidden -rotate-2 overflow-hidden rounded-xl border-[6px] border-paper shadow-[0_28px_60px_-18px_rgba(27,18,12,0.75)] ring-1 ring-coffee-950/15 md:block lg:h-64 lg:w-56">
        <img
          src={tazaCafeImg}
          alt="Taza de Café San Jacinto recién servida"
          className="h-full w-full object-cover"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold-300/30 bg-coffee-950/25 px-4 py-2 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
            <span className="text-[11px] font-semibold uppercase tracking-widest2 text-gold-200">
              Café artesanal · 100% colombiano · Carcasí
            </span>
          </span>
          <h1 className="text-shadow-hero font-display text-5xl font-semibold leading-[1.05] text-coffee-50 md:text-7xl">
            Café San Jacinto
          </h1>
          <p className="text-shadow-hero mt-6 font-display text-xl italic text-gold-200 md:text-2xl">
            &ldquo;El que rinde y rinde para su tinto.&rdquo;
          </p>
          <p className="text-shadow-hero mt-6 max-w-md text-base leading-relaxed text-coffee-100/90">
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

      <a
        href="#historia"
        aria-label="Desplázate para conocer nuestra historia"
        className="text-shadow-hero absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-coffee-50/85 transition-colors duration-300 ease-organic hover:text-gold-200 md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest2">Desliza</span>
        <span className="relative block h-12 w-px overflow-hidden bg-coffee-50/30 shadow-[0_0_6px_rgba(27,18,12,0.6)]">
          <span className="animate-scroll-cue absolute inset-x-0 top-0 block h-4 bg-gold-300" />
        </span>
      </a>
    </section>
  )
}
