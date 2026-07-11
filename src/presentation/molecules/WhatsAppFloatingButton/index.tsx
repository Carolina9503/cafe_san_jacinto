import { buildWhatsAppLink } from '@/shared/constants/contact'
import { WhatsAppGlyph } from '@/presentation/molecules/SocialLinks/icons'

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lifted transition-transform duration-300 ease-organic hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <WhatsAppGlyph size={26} />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-coffee-900 px-3 py-1.5 text-xs font-medium text-coffee-50 opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
        Escríbenos por WhatsApp
      </span>
    </a>
  )
}
