import type { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

type HeadingLevel = 1 | 2 | 3 | 4
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'

const levelStyles: Record<HeadingLevel, string> = {
  1: 'text-4xl md:text-6xl leading-[1.05] font-semibold',
  2: 'text-3xl md:text-4xl leading-tight font-semibold',
  3: 'text-2xl md:text-3xl leading-snug font-medium',
  4: 'text-xl md:text-2xl leading-snug font-medium',
}

interface HeadingProps {
  level?: HeadingLevel
  as?: HeadingTag
  className?: string
  italic?: boolean
  children: ReactNode
}

export function Heading({ level = 2, as, className, italic = false, children }: HeadingProps) {
  const Tag = as ?? (`h${level}` as HeadingTag)
  return (
    <Tag
      className={cn(
        'font-display text-balance text-ink',
        levelStyles[level],
        italic && 'italic',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
