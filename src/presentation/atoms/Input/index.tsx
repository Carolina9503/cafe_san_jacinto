import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { cn } from '@/shared/utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, hasError, ...props },
  ref,
) {
  return (
    <input
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
