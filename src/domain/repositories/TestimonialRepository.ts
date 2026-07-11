import type { Testimonial } from '../entities/Testimonial'

export interface TestimonialRepository {
  getAll(): Testimonial[]
}
