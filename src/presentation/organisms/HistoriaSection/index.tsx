import { useHistory } from '@/application/hooks/useHistory'
import { Container } from '@/presentation/atoms/Container'
import { Text } from '@/presentation/atoms/Text'
import { SectionHeading } from '@/presentation/molecules/SectionHeading'
import { plantaCafeImg } from '@/shared/assets/images'

export function HistoriaSection() {
  const milestones = useHistory()

  return (
    <section id="historia" className="bg-beige py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Nuestra historia"
              title="La historia de Doña Rosa"
              align="left"
            />
            <Text variant="secondary" className="mt-6">
              Todo comenzó cuando Doña Rosa, líder comunitaria de Carcasí, aceptó el reto de
              formar un proyecto de café con el SENA. De casi treinta personas inscritas, solo
              ella y su esposo, don Ceferino Daza, lo sacaron adelante: sembrando, cuidando y
              cosechando cada mata con sus propias manos, hasta convertirlo en el café que hoy
              tuestan, muelen y empacan ellos mismos.
            </Text>

            <blockquote className="mt-6 border-l-2 border-gold-400 pl-4">
              <Text variant="body" className="italic text-ink/80">
                &ldquo;Mi sueño es llegar a vender un café de excelente calidad, a buen precio, y
                que sea reconocido en toda Colombia.&rdquo;
              </Text>
              <p className="mt-2 text-sm text-ink-secondary">— Doña Rosa, fundadora</p>
            </blockquote>

            <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
              <img
                src={plantaCafeImg}
                alt="Planta de café joven en la finca San Jacinto, Carcasí"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/40 via-transparent to-transparent" />
            </div>
          </div>

          <ol className="relative border-l border-coffee-300 pl-8">
            {milestones.map((milestone) => (
              <li key={milestone.id} className="mb-12 last:mb-0">
                <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-beige bg-gold-400" />
                <span className="font-display text-sm font-semibold tracking-wide text-gold-500">
                  {milestone.stage}
                </span>
                <h3 className="mt-1 font-display text-xl font-medium text-coffee-900">
                  {milestone.title}
                </h3>
                <Text variant="secondary" className="mt-2 text-sm">
                  {milestone.description}
                </Text>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
