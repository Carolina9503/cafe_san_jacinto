import { cn } from '@/shared/utils/cn'
import { FACEBOOK_URL, buildWhatsAppLink } from '@/shared/constants/contact'
import { FacebookGlyph, WhatsAppGlyph } from './icons'

const links = [
  { icon: FacebookGlyph, label: 'Facebook', href: FACEBOOK_URL },
  { icon: WhatsAppGlyph, label: 'WhatsApp', href: buildWhatsAppLink() },
]

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-coffee-50/25 text-coffee-50 transition-colors duration-200 hover:border-gold-400 hover:text-gold-400"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}
