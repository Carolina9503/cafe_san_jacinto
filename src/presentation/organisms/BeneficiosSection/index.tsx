import { useBenefits } from '@/application/hooks/useBenefits'
import { Container } from '@/presentation/atoms/Container'
import { SectionHeading } from '@/presentation/molecules/SectionHeading'
import { BenefitCard } from '@/presentation/molecules/BenefitCard'

export function BeneficiosSection() {
  const benefits = useBenefits()

  return (
    <section id="beneficios" className="bg-beige py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="Un café que rinde en cada sentido"
          description="Calidad premium, respaldada por prácticas que cuidan a la tierra y a quienes la trabajan."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </Container>
    </section>
  )
}
