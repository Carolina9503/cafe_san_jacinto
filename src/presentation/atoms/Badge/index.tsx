import type { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

type BadgeTone = 'gold' | 'organic' | 'coffee' | 'outline'

const toneStyles: Record<BadgeTone, string> = {
  gold: 'bg-gold-400 text-coffee-900',
  organic: 'bg-organic-500 text-white',
  coffee: 'bg-coffee-700 text-coffee-50',
  outline: 'border border-coffee-300 text-ink-secondary bg-coffee-50/60',
}

interface BadgeProps {
  tone?: BadgeTone
  className?: string
  children: ReactNode
}

export function Badge({ tone = 'gold', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide',
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
