import { ArrowRight } from 'lucide-react'
import { Container } from '@/presentation/atoms/Container'
import { Logo } from '@/presentation/atoms/Logo'
import { Text } from '@/presentation/atoms/Text'
import { Button } from '@/presentation/atoms/Button'
import { Input } from '@/presentation/atoms/Input'
import { SocialLinks } from '@/presentation/molecules/SocialLinks'

const linkColumns = [
  {
    title: 'Explorar',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Nuestra historia', href: '#historia' },
      { label: 'Nuestro café', href: '#cafe' },
      { label: 'Productos', href: '#productos' },
    ],
  },
  {
    title: 'Ayuda',
    links: [
      { label: 'Puntos de venta', href: '#distribucion' },
      { label: 'Testimonios', href: '#testimonios' },
      { label: 'Contacto', href: '#contacto' },
      { label: 'Preguntas frecuentes', href: '#contacto' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-wood bg-coffee-900 pt-20 text-coffee-50">
      <Container>
        <div className="grid gap-12 border-b border-coffee-50/10 pb-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Logo imgClassName="h-20 w-20" />
            <Text variant="body" className="mt-5 max-w-xs text-sm text-coffee-100/70">
              Café artesanal, orgánico y 100% colombiano. El que rinde y rinde para su tinto.
            </Text>
            <SocialLinks className="mt-6" />
          </div>

          {linkColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest2 text-gold-300">
                {column.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-coffee-100/70 transition-colors hover:text-gold-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest2 text-gold-300">
              Recibe novedades
            </h4>
            <Text variant="body" className="mt-4 text-sm text-coffee-100/70">
              Cosechas especiales y lanzamientos, directo a tu correo.
            </Text>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-4 flex items-center gap-2"
            >
              <Input
                type="email"
                required
                placeholder="tu@correo.com"
                className="border-coffee-50/20 bg-coffee-50/5 text-coffee-50 placeholder:text-coffee-100/40"
              />
              <Button type="submit" size="sm" aria-label="Suscribirme" icon={<ArrowRight size={16} />} />
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-coffee-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Café San Jacinto. Todos los derechos reservados.</p>
          <p>Hecho con cariño en las montañas de Colombia.</p>
        </div>
      </Container>
    </footer>
  )
}
