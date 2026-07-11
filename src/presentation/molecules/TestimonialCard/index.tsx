import { Quote } from 'lucide-react'
import type { Testimonial } from '@/domain/entities/Testimonial'
import { Text } from '@/presentation/atoms/Text'
import { RatingStars } from '@/presentation/molecules/RatingStars'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col gap-5 rounded-2xl border border-coffee-200 bg-white p-8 shadow-soft">
      <Quote size={28} strokeWidth={1.25} className="text-gold-400" />
      <blockquote>
        <Text variant="body" className="italic text-ink/90">
          “{testimonial.quote}”
        </Text>
      </blockquote>
      <RatingStars rating={testimonial.rating} />
      <figcaption className="mt-auto pt-2">
        <p className="font-display text-base font-medium text-coffee-800">
          {testimonial.authorName}
        </p>
        <p className="text-sm text-ink-secondary">{testimonial.authorRole}</p>
      </figcaption>
    </figure>
  )
}
