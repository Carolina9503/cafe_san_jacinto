import type { ReactNode } from 'react'
import { Heading } from '@/presentation/atoms/Heading'
import { Text } from '@/presentation/atoms/Text'
import { Divider } from '@/presentation/atoms/Divider'
import { cn } from '@/shared/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  const isLight = tone === 'light'

  return (
    <div className={cn('max-w-2xl', isCenter && 'mx-auto text-center', className)}>
      {eyebrow && (
        <Text variant="eyebrow" className={cn('mb-3', isLight && 'text-gold-200')}>
          {eyebrow}
        </Text>
      )}
      <Heading level={2} className={isLight ? 'text-coffee-50' : undefined}>
        {title}
      </Heading>
      {isCenter && <Divider className="my-6" />}
      {description && (
        <Text variant={isLight ? 'body' : 'secondary'} className={cn(!isCenter && 'mt-4', isLight && 'text-coffee-100/80')}>
          {description}
        </Text>
      )}
    </div>
  )
}
