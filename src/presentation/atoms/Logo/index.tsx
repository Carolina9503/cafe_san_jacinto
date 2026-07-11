import { logoImg } from '@/shared/assets/images'
import { cn } from '@/shared/utils/cn'

interface LogoProps {
  className?: string
  imgClassName?: string
}

export function Logo({ className, imgClassName }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center', className)}>
      <img
        src={logoImg}
        alt="Café San Jacinto — El que rinde y rinde para su tinto"
        className={cn('h-14 w-14 shrink-0 object-contain', imgClassName)}
      />
    </span>
  )
}
