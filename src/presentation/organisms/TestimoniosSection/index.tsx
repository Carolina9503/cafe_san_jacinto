import { useTestimonials } from '@/application/hooks/useTestimonials'
import { Container } from '@/presentation/atoms/Container'
import { SectionHeading } from '@/presentation/molecules/SectionHeading'
import { TestimonialCard } from '@/presentation/molecules/TestimonialCard'

export function TestimoniosSection() {
  const testimonials = useTestimonials()

  return (
    <section id="testimonios" className="bg-beige py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonios"
          title="La confianza de quienes ya lo probaron"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}
