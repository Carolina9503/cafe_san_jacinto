import type { LucideIcon } from 'lucide-react'
import { cn } from '@/shared/utils/cn'

interface IconLineProps {
  icon: LucideIcon
  size?: number
  strokeWidth?: number
  className?: string
  circleClassName?: string
  withCircle?: boolean
}

export function IconLine({
  icon: Icon,
  size = 22,
  strokeWidth = 1.5,
  className,
  circleClassName,
  withCircle = false,
}: IconLineProps) {
  if (withCircle) {
    return (
      <span
        className={cn(
          'inline-flex items-center justify-center rounded-full bg-coffee-700/8 text-coffee-700',
          circleClassName,
        )}
        style={{ width: size * 2.2, height: size * 2.2 }}
      >
        <Icon size={size} strokeWidth={strokeWidth} className={className} />
      </span>
    )
  }

  return <Icon size={size} strokeWidth={strokeWidth} className={className} />
}
