import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@/shared/utils/cn'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  tone?: 'dark' | 'light'
}

export function NavLink({ className, tone = 'dark', children, ...props }: NavLinkProps) {
  return (
    <a
      className={cn(
        'group relative text-sm font-medium tracking-wide transition-colors duration-200',
        tone === 'light' ? 'text-coffee-50/90 hover:text-gold-300' : 'text-ink hover:text-coffee-700',
        className,
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          'absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 ease-organic group-hover:w-full',
        )}
      />
    </a>
  )
}
