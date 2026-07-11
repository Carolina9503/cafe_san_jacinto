import type { ElementType, ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

type TextVariant = 'body' | 'secondary' | 'eyebrow'

const variantStyles: Record<TextVariant, string> = {
  body: 'text-base leading-relaxed text-ink/90',
  secondary: 'text-base leading-relaxed text-ink-secondary',
  eyebrow: 'text-xs uppercase tracking-widest2 text-gold-500 font-semibold',
}

interface TextProps {
  as?: ElementType
  variant?: TextVariant
  className?: string
  children: ReactNode
}

export function Text({ as: Tag = 'p', variant = 'body', className, children }: TextProps) {
  return <Tag className={cn('font-sans', variantStyles[variant], className)}>{children}</Tag>
}
