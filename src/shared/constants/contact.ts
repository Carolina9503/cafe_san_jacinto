export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61591419317860'

export const WHATSAPP_NUMBER = '573102049535'

export const WHATSAPP_DEFAULT_MESSAGE = 'Hola, quiero más información sobre Café San Jacinto.'

export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
