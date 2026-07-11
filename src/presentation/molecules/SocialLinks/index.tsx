import type { CSSProperties } from 'react'
import { cn } from '@/shared/utils/cn'
import { FACEBOOK_URL, buildWhatsAppLink } from '@/shared/constants/contact'
import { FacebookGlyph, WhatsAppGlyph } from './icons'

const links = [
  { icon: FacebookGlyph, label: 'Facebook', href: FACEBOOK_URL, bg: '#1877F2', bgHover: '#0C63D4' },
  { icon: WhatsAppGlyph, label: 'WhatsApp', href: buildWhatsAppLink(), bg: '#25D366', bgHover: '#1DA851' },
]

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {links.map(({ icon: Icon, label, href, bg, bgHover }) => {
        const style = { backgroundColor: bg, '--hover-bg': bgHover } as CSSProperties

        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            style={style}
            className="group inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-soft transition-all duration-200 ease-organic hover:-translate-y-0.5 hover:shadow-lifted hover:[background-color:var(--hover-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            <Icon size={24} strokeWidth={1.8} />
          </a>
        )
      })}
    </div>
  )
}
