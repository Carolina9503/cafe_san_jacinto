import { Star } from 'lucide-react'
import { cn } from '@/shared/utils/cn'

interface RatingStarsProps {
  rating: number
  className?: string
}

export function RatingStars({ rating, className }: RatingStarsProps) {
  return (
    <div className={cn('flex items-center gap-1', className)} aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={16}
          strokeWidth={1.5}
          className={index < rating ? 'fill-gold-400 text-gold-400' : 'text-coffee-300'}
        />
      ))}
    </div>
  )
}
