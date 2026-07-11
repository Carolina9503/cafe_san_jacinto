import type { ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

interface FormFieldProps {
  label: string
  htmlFor: string
  error?: string
  className?: string
  children: ReactNode
}

export function FormField({ label, htmlFor, error, className, children }: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
