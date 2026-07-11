import { MapPin, ArrowRight } from 'lucide-react'
import { useDistributionPoints } from '@/application/hooks/useDistributionPoints'
import { Container } from '@/presentation/atoms/Container'
import { Button } from '@/presentation/atoms/Button'
import { Badge } from '@/presentation/atoms/Badge'
import { Text } from '@/presentation/atoms/Text'
import { SectionHeading } from '@/presentation/molecules/SectionHeading'
import { buildWhatsAppLink } from '@/shared/constants/contact'

export function DistribucionSection() {
  const points = useDistributionPoints()

  return (
    <section id="distribucion" className="border-y border-coffee-200 bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Dónde encontrarnos"
          title="Puntos de distribución autorizados"
          description="Desde la finca en Carcasí hasta tu ciudad: así de lejos ha llegado el café de Doña Rosa."
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-5 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point.id}
              className="flex items-start gap-4 rounded-2xl border border-coffee-200 bg-white p-6 shadow-soft"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coffee-700/8 text-coffee-700">
                <MapPin size={18} strokeWidth={1.5} />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-medium text-coffee-900">
                    {point.city}
                  </h3>
                  {point.type === 'origen' && <Badge tone="organic">Origen</Badge>}
                </div>
                <Text variant="secondary" className="text-sm">
                  {point.department}
                </Text>
                <Text variant="secondary" className="mt-2 text-sm">
                  {point.description}
                </Text>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href={buildWhatsAppLink('Hola, quiero saber cómo comprar Café San Jacinto en mi ciudad.')}
            target="_blank"
            rel="noreferrer"
            icon={<ArrowRight size={18} />}
          >
            Coordina tu pedido por WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  )
}
