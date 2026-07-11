import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'secondary-light' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-300 ease-organic rounded-md disabled:opacity-50 disabled:pointer-events-none'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-coffee-700 text-coffee-50 shadow-soft hover:bg-coffee-800 hover:shadow-card active:bg-coffee-900',
  secondary:
    'bg-transparent text-coffee-700 border border-coffee-700/40 hover:border-coffee-700 hover:bg-coffee-700/5',
  'secondary-light':
    'bg-coffee-50/10 text-coffee-50 border border-coffee-50/50 backdrop-blur-sm hover:border-gold-300 hover:bg-coffee-50/20',
  ghost: 'bg-transparent text-coffee-700 hover:text-gold-500 underline-offset-4 hover:underline',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-6 py-3',
  lg: 'text-base px-8 py-4',
}

interface CommonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  children?: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={classes} {...anchorProps}>
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} {...buttonProps}>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  )
}
