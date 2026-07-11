import type { TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { cn } from '@/shared/utils/cn'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, hasError, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={cn(
        'w-full rounded-md border bg-coffee-50/50 px-4 py-3 text-ink placeholder:text-ink-secondary/60',
        'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400/60',
        hasError ? 'border-red-400' : 'border-coffee-300 focus:border-gold-400',
        className,
      )}
      {...props}
    />
  )
})
