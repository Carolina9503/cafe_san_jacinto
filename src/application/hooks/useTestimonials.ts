import { useMemo } from 'react'
import { StaticTestimonialRepository } from '../../infrastructure/repositories/StaticTestimonialRepository'

const testimonialRepository = new StaticTestimonialRepository()

export function useTestimonials() {
  return useMemo(() => testimonialRepository.getAll(), [])
}
