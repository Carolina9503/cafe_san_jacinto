import type { Testimonial } from '../../domain/entities/Testimonial'
import type { TestimonialRepository } from '../../domain/repositories/TestimonialRepository'
import { testimonialsData } from '../data/testimonials.data'

export class StaticTestimonialRepository implements TestimonialRepository {
  getAll(): Testimonial[] {
    return testimonialsData
  }
}
