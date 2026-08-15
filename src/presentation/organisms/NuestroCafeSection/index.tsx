import { Mountain, Hand, Flame, Package } from 'lucide-react'
import { Container } from '@/presentation/atoms/Container'
import { Text } from '@/presentation/atoms/Text'
import { IconLine } from '@/presentation/atoms/IconLine'
import { SectionHeading } from '@/presentation/molecules/SectionHeading'
import { plantaGranosImg } from '@/shared/assets/images'

const steps = [
  {
    icon: Mountain,
    title: 'Cultivo en altura',
    description: 'Nuestros cafetales crecen entre 1.600 y 2.000 msnm, bajo sombra natural.',
  },
  {
    icon: Hand,
    title: 'Cosecha selectiva',
    description: 'Cada grano es recolectado a mano, uno por uno, en su punto justo de madurez.',
  },
  {
    icon: Flame,
    title: 'Tueste artesanal',
    description: 'Tostado en perol, en pequeños lotes, tal como lo hace Rosa desde el primer día.',
  },
  {
    icon: Package,
    title: 'Empaque fresco',
    description: 'Sellado poco después del tueste para que la taza conserve todo su aroma.',
  },
]

export function NuestroCafeSection() {
  return (
    <section id="cafe" className="relative isolate overflow-hidden bg-coffee-900 py-24 md:py-32">
      {/* Softly blurred so the photograph keeps its colour and depth without fighting the copy.
          scale-105 hides the transparent fringe the blur leaves at the edges. */}
      <img
        src={plantaGranosImg}
        alt="Granos de café madurando en la planta"
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[3px] saturate-[1.1]"
      />

      {/* Even scrim: full-width copy needs uniform legibility, with a touch of vertical depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(27,18,12,0.88)_0%,rgba(27,18,12,0.78)_38%,rgba(27,18,12,0.80)_70%,rgba(27,18,12,0.90)_100%)]" />

      {/* Warm bloom, echoing the hero */}
      <div className="absolute inset-0 mix-blend-screen bg-[radial-gradient(60%_50%_at_50%_0%,rgba(223,184,71,0.16)_0%,transparent_70%)]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Nuestro café"
          title="De la finca a tu taza, sin atajos"
          description="Un proceso artesanal cuidado en cada etapa, tal como se ha hecho por generaciones en nuestra tierra cafetera."
          tone="light"
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <span className="font-display text-sm text-gold-300/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              <IconLine
                icon={step.icon}
                size={24}
                withCircle
                circleClassName="mt-3 bg-coffee-50/10 text-gold-300"
              />
              <h3 className="mt-4 font-display text-lg font-medium text-coffee-50">
                {step.title}
              </h3>
              <Text variant="body" className="mt-2 text-sm text-coffee-100/85">
                {step.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
