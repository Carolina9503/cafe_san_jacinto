interface SocialIconProps {
  size?: number
}

export function FacebookGlyph({ size = 18 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 21v-7h2.4l.4-3H14V9.2c0-.9.3-1.6 1.7-1.6H17V5.1C16.6 5 15.7 5 14.7 5c-2.2 0-3.7 1.4-3.7 3.9V11H8.6v3H11v7h3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WhatsAppGlyph({ size = 18 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 17.5 4 20l2.6-.7A8 8 0 1 0 4.5 15l2 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 10c0 3 2.5 5.5 5.5 5.5.6 0 1-.5.8-1l-.6-1.4c-.1-.3-.5-.4-.8-.3l-.9.4a4.2 4.2 0 0 1-2.7-2.7l.4-.9c.1-.3 0-.7-.3-.8L9 8.2c-.5-.2-1 .2-1 .8V10Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}
