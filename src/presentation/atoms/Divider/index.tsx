import { Coffee } from 'lucide-react'
import { cn } from '@/shared/utils/cn'

interface DividerProps {
  className?: string
}

export function Divider({ className }: DividerProps) {
  return (
    <div className={cn('flex items-center justify-center gap-4', className)} aria-hidden="true">
      <span className="h-px w-16 bg-coffee-300" />
      <Coffee size={16} strokeWidth={1.5} className="text-gold-500" />
      <span className="h-px w-16 bg-coffee-300" />
    </div>
  )
}
